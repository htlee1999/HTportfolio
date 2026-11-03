// CRA dev-server hook (only used by `npm start`, never bundled): serves /api/chat
// locally with the same handler Vercel runs, reading the key from .env.local.

const MAX_BODY = 16 * 1024;

module.exports = function setupProxy(app) {
  app.use('/api/chat', async (req, res) => {
    const { handleChat, chatStatus } = await import('../api/_lib/chat.mjs');
    const send = ({ status, body }) => {
      res.statusCode = status;
      res.setHeader('Content-Type', 'application/json');
      if (body?.retryAfterSec) res.setHeader('Retry-After', String(body.retryAfterSec));
      res.end(JSON.stringify(body));
    };

    if (req.method === 'GET') return send(chatStatus());
    if (req.method !== 'POST') return send({ status: 405, body: { error: 'method_not_allowed' } });

    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > MAX_BODY) req.destroy();
    });
    req.on('end', async () => {
      let body = null;
      try { body = JSON.parse(raw); } catch {}
      send(await handleChat(body, { ip: req.socket.remoteAddress, origin: req.headers.origin, host: req.headers.host }));
    });
  });
};
