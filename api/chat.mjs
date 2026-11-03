// Vercel serverless function: GET /api/chat -> availability, POST /api/chat -> answer.
// Requires GROQ_API_KEY (or GROQ_URL) in the Vercel project's environment variables.
// Never prefix it with REACT_APP_ — that would ship the key to every visitor.

import { handleChat, chatStatus } from './_lib/chat.mjs';

// Vercel sets x-real-ip / x-vercel-forwarded-for itself (clients can't spoof them).
const clientIp = (req) =>
  req.headers['x-real-ip'] ||
  String(req.headers['x-vercel-forwarded-for'] || req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
  req.socket?.remoteAddress ||
  'unknown';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  let result;
  if (req.method === 'GET') {
    result = chatStatus();
  } else if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { body = null; }
    }
    result = await handleChat(body, { ip: clientIp(req), origin: req.headers.origin, host: req.headers.host });
  } else {
    res.setHeader('Allow', 'GET, POST');
    result = { status: 405, body: { error: 'method_not_allowed' } };
  }

  if (result.body?.retryAfterSec) res.setHeader('Retry-After', String(result.body.retryAfterSec));
  res.status(result.status).json(result.body);
}
