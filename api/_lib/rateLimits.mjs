// Keeps every Groq call comfortably under the free-tier limits
// (https://console.groq.com/docs/rate-limits). Each model is tracked two ways:
//   1. locally — sliding windows of requests/tokens per minute and per day, and
//   2. authoritatively — Groq's x-ratelimit-* headers from the last response
//      (remaining requests/day and remaining tokens/minute).
// A model is skipped once any limit would pass SAFETY of its quota, and the chat is
// switched off when no model is left, so we stop *before* Groq starts returning 429s.
//
// State is in-memory per serverless instance. Groq's headers cover the cross-instance
// gap for RPD/TPM; for hard guarantees across instances, back this with a shared
// store (e.g. Upstash Redis).

export const SAFETY = 0.85; // use at most 85% of any quota

const MINUTE = 60_000;
const DAY = 24 * 60 * MINUTE;

const state = new Map(); // modelId -> tracker

function tracker(model) {
  if (!state.has(model.id)) {
    state.set(model.id, { events: [], header: null, cooldownUntil: 0 });
  }
  return state.get(model.id);
}

// Groq reset durations look like "52ms", "6s", "1m26.4s", "2h3m".
export function parseDuration(value) {
  if (!value) return 0;
  let ms = 0;
  const re = /([\d.]+)(ms|h|m|s)/g;
  let m;
  while ((m = re.exec(value))) {
    const n = parseFloat(m[1]);
    ms += m[2] === 'ms' ? n : m[2] === 's' ? n * 1000 : m[2] === 'm' ? n * MINUTE : n * 60 * MINUTE;
  }
  return ms;
}

function usage(t, now) {
  t.events = t.events.filter((e) => now - e.at < DAY);
  const lastMinute = t.events.filter((e) => now - e.at < MINUTE);
  return {
    reqMin: lastMinute.length,
    tokMin: lastMinute.reduce((n, e) => n + e.tokens, 0),
    reqDay: t.events.length,
    tokDay: t.events.reduce((n, e) => n + e.tokens, 0),
    oldestMinute: lastMinute[0]?.at,
    oldestDay: t.events[0]?.at,
  };
}

/**
 * Can `model` take a request of roughly `estTokens` right now without getting
 * near its limits? Returns { ok, retryAfterMs }.
 */
export function check(model, estTokens, now = Date.now()) {
  const t = tracker(model);
  const u = usage(t, now);
  const waits = [];

  if (t.cooldownUntil > now) waits.push(t.cooldownUntil - now);

  const minuteFull = u.reqMin + 1 > model.rpm * SAFETY || u.tokMin + estTokens > model.tpm * SAFETY;
  if (minuteFull) waits.push(u.oldestMinute ? u.oldestMinute + MINUTE - now : MINUTE);

  const dayFull = u.reqDay + 1 > model.rpd * SAFETY || u.tokDay + estTokens > model.tpd * SAFETY;
  if (dayFull) waits.push(u.oldestDay ? u.oldestDay + DAY - now : DAY);

  const h = t.header;
  if (h) {
    // Remaining requests/day: Groq replenishes gradually; treat the header as valid until its reset.
    const rpd = h.limitRequests || model.rpd;
    const tpm = h.limitTokens || model.tpm;
    if (now < h.at + h.resetRequestsMs && h.remainingRequests - 1 < rpd * (1 - SAFETY)) {
      waits.push(h.at + h.resetRequestsMs - now);
    }
    // Remaining tokens/minute.
    if (now < h.at + h.resetTokensMs && h.remainingTokens - estTokens < tpm * (1 - SAFETY)) {
      waits.push(h.at + h.resetTokensMs - now);
    }
  }

  return waits.length ? { ok: false, retryAfterMs: Math.max(...waits) } : { ok: true, retryAfterMs: 0 };
}

/** Record a completed call: actual tokens used plus Groq's rate-limit headers. */
export function record(model, { tokens, headers }, now = Date.now()) {
  const t = tracker(model);
  t.events.push({ at: now, tokens: tokens || 0 });
  const num = (name) => {
    const v = headers?.get?.(name);
    return v == null ? null : Number(v);
  };
  const remainingRequests = num('x-ratelimit-remaining-requests');
  const remainingTokens = num('x-ratelimit-remaining-tokens');
  if (remainingRequests != null && remainingTokens != null) {
    t.header = {
      at: now,
      remainingRequests,
      remainingTokens,
      limitRequests: num('x-ratelimit-limit-requests'),
      limitTokens: num('x-ratelimit-limit-tokens'),
      resetRequestsMs: parseDuration(headers.get('x-ratelimit-reset-requests')),
      resetTokensMs: parseDuration(headers.get('x-ratelimit-reset-tokens')),
    };
  }
}

/** Groq said 429 (or the model is unavailable): park the model until it's safe again. */
export function coolDown(model, retryAfterSec, now = Date.now()) {
  const t = tracker(model);
  t.events.push({ at: now, tokens: 0 });
  t.cooldownUntil = Math.max(t.cooldownUntil, now + Math.max(retryAfterSec || 60, 5) * 1000);
}

// --- Per-visitor limits, so one person can't drain the shared quota ---

export const VISITOR_LIMITS = { perMinute: 5, perDay: 40 };
const visitors = new Map(); // ip -> [timestamps]

export function checkVisitor(ip, now = Date.now()) {
  const hits = (visitors.get(ip) || []).filter((at) => now - at < DAY);
  visitors.set(ip, hits);
  const lastMinute = hits.filter((at) => now - at < MINUTE);
  if (lastMinute.length >= VISITOR_LIMITS.perMinute) {
    return { ok: false, retryAfterMs: lastMinute[0] + MINUTE - now };
  }
  if (hits.length >= VISITOR_LIMITS.perDay) {
    return { ok: false, retryAfterMs: hits[0] + DAY - now };
  }
  hits.push(now);
  if (visitors.size > 5000) visitors.delete(visitors.keys().next().value);
  return { ok: true, retryAfterMs: 0 };
}

export function _resetForTests() {
  state.clear();
  visitors.clear();
}
