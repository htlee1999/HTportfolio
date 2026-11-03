// Netlify function: GET /api/chat -> availability, POST /api/chat -> answer.
// Requires GROQ_API_KEY in Netlify → Site configuration → Environment variables (scope: Functions).
// Never prefix it with REACT_APP_ — that would ship the key to every visitor.

import { handleChat, chatStatus } from '../../api/_lib/chat.mjs';

const MAX_BODY = 16 * 1024;

const json = ({ status, body }) => {
  const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
  if (body?.retryAfterSec) headers['Retry-After'] = String(body.retryAfterSec);
  if (status === 405) headers.Allow = 'GET, POST';
  return new Response(JSON.stringify(body), { status, headers });
};

export default async (req, context) => {
  if (req.method === 'GET') return json(chatStatus());
  if (req.method !== 'POST') return json({ status: 405, body: { error: 'method_not_allowed' } });

  const raw = await req.text();
  let body = null;
  if (raw.length <= MAX_BODY) {
    try { body = JSON.parse(raw); } catch {}
  }

  // context.ip comes from Netlify's edge (x-nf-client-connection-ip); clients can't spoof it.
  return json(await handleChat(body, {
    ip: context.ip || req.headers.get('x-nf-client-connection-ip') || 'unknown',
    origin: req.headers.get('origin'),
    host: new URL(req.url).host,
  }));
};

// Custom paths take precedence over the /* → /index.html SPA redirect in netlify.toml.
export const config = { path: '/api/chat' };
