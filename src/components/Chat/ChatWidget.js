import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaCommentDots, FaTimes, FaPaperPlane, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './ChatWidget.css';
import { profile, contact } from '../Profile/profileData';

const API_URL = '/api/chat';
const MAX_CHARS = 500;
const HISTORY_SENT = 3; // exchanges; matches the server's maxHistoryExchanges
const MIN_GAP_MS = 2500; // client-side pacing between questions
const SESSION_CAP = 25; // questions per browser session
const SESSION_KEY = 'htChatCount';

const SUGGESTIONS = [
  'What does Hong Teng do now?',
  'What AI projects has Hong Teng built?',
  'What did Hong Teng study?',
  'What roles is Hong Teng looking for?',
];

const firstName = profile.name.split(' ').slice(0, 2).join(' ');
const GREETING = `Hi! I can answer questions about ${firstName}'s experience, projects, education and interests — using only what's on this site.`;

const readCount = () => {
  try { return Number(sessionStorage.getItem(SESSION_KEY)) || 0; } catch { return 0; }
};
const writeCount = (n) => {
  try { sessionStorage.setItem(SESSION_KEY, String(n)); } catch { /* storage unavailable */ }
};

const formatWait = (sec) => {
  if (sec < 90) return `${Math.max(1, Math.round(sec))} seconds`;
  if (sec < 5400) return `${Math.round(sec / 60)} minutes`;
  return `${Math.round(sec / 3600)} hours`;
};

// --- Tiny safe renderer: **bold**, "- " bullets and links. No raw HTML. ---
const INLINE = /(\*\*[^*]+\*\*|https?:\/\/[^\s)\]<>"']+|[\w.+-]+@[\w-]+\.[\w.]+)/g;

const renderInline = (text) =>
  text.split(INLINE).map((part, i) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (/^https?:\/\//.test(part)) {
      const url = part.replace(/[.,;:!?]+$/, '');
      return (
        <React.Fragment key={i}>
          <a href={url} target="_blank" rel="noopener noreferrer">{url.replace(/^https?:\/\/(www\.)?/, '')}</a>
          {part.slice(url.length)}
        </React.Fragment>
      );
    }
    if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part)) {
      const email = part.replace(/\.+$/, '');
      return (
        <React.Fragment key={i}>
          <a href={`mailto:${email}`}>{email}</a>
          {part.slice(email.length)}
        </React.Fragment>
      );
    }
    return part;
  });

const renderMessage = (text) => {
  const blocks = [];
  let bullets = [];
  const flush = () => {
    if (bullets.length) blocks.push(<ul key={`ul-${blocks.length}`}>{bullets}</ul>);
    bullets = [];
  };
  text.split('\n').forEach((raw, i) => {
    const line = raw.trim();
    const bullet = line.match(/^[-*•]\s+(.*)/);
    if (bullet) {
      bullets.push(<li key={i}>{renderInline(bullet[1])}</li>);
    } else {
      flush();
      if (line) blocks.push(<p key={i}>{renderInline(line)}</p>);
    }
  });
  flush();
  return blocks;
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: GREETING }]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  // 'unknown' | 'ready' | 'paused' (rate limited) | 'offline'
  const [status, setStatus] = useState('unknown');
  const [pausedUntil, setPausedUntil] = useState(0);
  const [notice, setNotice] = useState('');
  const lastSentAt = useRef(0);
  const logRef = useRef(null);
  const inputRef = useRef(null);

  const checkStatus = useCallback(async () => {
    if (typeof fetch !== 'function') return;
    try {
      const res = await fetch(API_URL, { method: 'GET' });
      const data = await res.json();
      if (data.available) {
        setStatus('ready');
        setNotice('');
      } else if (data.reason === 'rate_limited') {
        setStatus('paused');
        setPausedUntil(Date.now() + (data.retryAfterSec || 60) * 1000);
      } else {
        setStatus('offline');
      }
    } catch {
      setStatus('offline');
    }
  }, []);

  // Check availability when first opened, and again once a pause should be over.
  useEffect(() => {
    if (open && status === 'unknown') checkStatus();
  }, [open, status, checkStatus]);

  useEffect(() => {
    if (status !== 'paused') return undefined;
    const t = setTimeout(checkStatus, Math.max(pausedUntil - Date.now(), 1000) + 500);
    return () => clearTimeout(t);
  }, [status, pausedUntil, checkStatus]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, sending, notice]);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const capReached = readCount() >= SESSION_CAP;
  const canSend = status === 'ready' && !sending && !capReached;

  const send = async (text) => {
    const question = text.trim();
    if (!question || !canSend) return;
    if (question.length > MAX_CHARS) {
      setNotice(`Please keep questions under ${MAX_CHARS} characters.`);
      return;
    }
    const wait = lastSentAt.current + MIN_GAP_MS - Date.now();
    if (wait > 0) {
      setNotice('One moment — please wait a second between questions.');
      return;
    }

    lastSentAt.current = Date.now();
    writeCount(readCount() + 1);
    // Only server-signed exchanges are sent back; the server ignores anything unsigned.
    const history = messages
      .map((m) => (m.sig ? { q: m.q, a: m.content, sig: m.sig } : null))
      .filter(Boolean)
      .slice(-HISTORY_SENT);
    setMessages((m) => [...m, { role: 'user', content: question }]);
    setInput('');
    setNotice('');
    setSending(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question, history }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.reply) {
        setMessages((m) => [...m, { role: 'assistant', content: data.reply, q: data.q, sig: data.sig }]);
      } else if (res.status === 429 && data.error === 'service_rate_limited') {
        setStatus('paused');
        setPausedUntil(Date.now() + (data.retryAfterSec || 60) * 1000);
      } else {
        setNotice(data.message || 'Something went wrong. Please try again.');
        if (res.status >= 500) setStatus('offline');
      }
    } catch {
      setNotice("Couldn't reach the assistant. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  let banner = null;
  if (status === 'paused') {
    banner = `The assistant is taking a break — it's reached its free usage limit. Try again in about ${formatWait((pausedUntil - Date.now()) / 1000)}, or reach out directly:`;
  } else if (status === 'offline') {
    banner = "The assistant isn't available right now. You can reach out directly:";
  } else if (capReached) {
    banner = "You've reached the question limit for this session. Thanks for your interest — reach out directly:";
  }

  return (
    <div className="chat">
      {open && (
        <section className="chat-panel" role="dialog" aria-label={`Ask about ${profile.name}`}>
          <header className="chat-head">
            <div>
              <h2 className="chat-title">Ask about {firstName}</h2>
              <p className="chat-sub">AI answers from this website only</p>
            </div>
            <button type="button" className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <FaTimes />
            </button>
          </header>

          <div className="chat-log" ref={logRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg chat-msg--${m.role}`}>
                {m.role === 'assistant' ? renderMessage(m.content) : <p>{m.content}</p>}
              </div>
            ))}

            {messages.length === 1 && status === 'ready' && (
              <div className="chat-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button type="button" key={s} onClick={() => send(s)} disabled={!canSend}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            {sending && (
              <div className="chat-msg chat-msg--assistant chat-typing" aria-label="Assistant is typing">
                <span /><span /><span />
              </div>
            )}

            {notice && <p className="chat-notice">{notice}</p>}

            {banner && (
              <div className="chat-banner">
                <p>{banner}</p>
                <div className="chat-banner-links">
                  <a href={`mailto:${contact.email}`}><FaEnvelope /> Email</a>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
                </div>
              </div>
            )}
          </div>

          <form className="chat-form" onSubmit={onSubmit}>
            <textarea
              ref={inputRef}
              className="chat-input"
              rows={1}
              value={input}
              maxLength={MAX_CHARS}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={status === 'unknown' ? 'Connecting…' : canSend || sending ? 'Ask a question…' : 'Chat paused'}
              disabled={!canSend && !sending}
              aria-label="Your question"
            />
            <button type="submit" className="chat-send" disabled={!canSend || !input.trim()} aria-label="Send">
              <FaPaperPlane />
            </button>
          </form>
          <div className="chat-foot">
            <span>Answers may be imperfect — check the pages for details.</span>
            {input.length > MAX_CHARS * 0.8 && <span>{input.length}/{MAX_CHARS}</span>}
          </div>
        </section>
      )}

      {!open && (
        <button
          type="button"
          className="chat-launcher"
          onClick={() => setOpen(true)}
          aria-label={`Ask about ${profile.name}`}
        >
          <FaCommentDots />
          <span className="chat-launcher-label">Ask about me</span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
