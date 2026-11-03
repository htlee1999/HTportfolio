// Builds the chatbot's knowledge base from the same data files the website renders,
// so the bot can only ever know what the site says. Content is split into small chunks
// and only the most relevant ones are sent per question (Groq free tier is 8K tokens/min).

import { profile, skills, contact } from '../../src/components/Profile/profileData.js';
import { degrees, smuCourses, npModules, milestones } from '../../src/components/Education/educationData.js';
import { experiences, competencies } from '../../src/components/Experience/experienceData.js';
import { schoolProjects, personalProjects, miniProjects } from '../../src/components/Projects/projectsData.js';
import { intro as interestsIntro, quote, timelineItems } from '../../src/components/Interests/interestsData.js';

// Netlify sets URL to the site's primary address in functions; SITE_URL overrides it.
export const SITE_URL = (process.env.SITE_URL || process.env.URL || 'https://leehongteng.vercel.app').replace(/\/$/, '');

export const estimateTokens = (text) => Math.ceil(text.length / 3.5);

const list = (items) => items.filter(Boolean).map((i) => `- ${i}`).join('\n');

// --- Always-included context: who Hong Teng is + a compact index of everything ---

const profileText = `## Profile
Name: ${profile.name} (${profile.headline}), based in ${profile.location}.
About: ${profile.about}
Current focus: ${profile.currentFocus}
Looking for: ${profile.lookingFor} (${profile.availability})
Personality & interests: ${profile.interests}
Key skills: ${skills.join(', ')}
Contact: email ${contact.email} | phone ${contact.phone} | LinkedIn ${contact.linkedin} | GitHub ${contact.github} | Instagram (food blog) ${contact.instagram}
Website pages: Home ${SITE_URL}/ | Education ${SITE_URL}/education | Experience ${SITE_URL}/experience | Projects ${SITE_URL}/projects | Interests ${SITE_URL}/interests`;

const allProjects = [
  ...schoolProjects.map((p) => ({ ...p, kind: 'School project' })),
  ...personalProjects.map((p) => ({ ...p, kind: 'Personal project' })),
  ...miniProjects.map((p) => ({ ...p, kind: 'Mini project' })),
];

const indexText = `## Overview
Work history (most recent first):
${list(experiences.map((e) => `${e.role}, ${e.company} (${e.period})`))}
Education:
${list(degrees.map((d) => `${d.titleLines.join(' ')} — ${d.subtitle}${d.subtitle.includes('Polytechnic') ? '' : ', Singapore Management University (SMU)'} (${d.year})${d.honour ? `, ${d.honour}` : ''}`))}
Projects: ${allProjects.map((p) => p.title).join('; ')}
Activities: ${timelineItems.map((t) => `${t.title} (${t.date})`).join('; ')}`;

// --- Retrievable chunks ---

const chunks = [];
const add = (section, title, text) => chunks.push({ section, title, text: `### ${title}\n${text}` });

experiences.forEach((e) => {
  const head = `${e.role} at ${e.company}, ${e.period}`;
  e.highlights.forEach((h) => {
    add('experience', `${head} — ${h.title}`, [
      h.description,
      list(h.details || []),
      h.link ? `Link: ${h.link.text} ${h.link.url}` : '',
      e.presentationLink ? `Related: ${e.presentationLink.text} ${SITE_URL}${encodeURI(e.presentationLink.url)}` : '',
    ].filter(Boolean).join('\n'));
  });
});
add('experience', 'Core competencies (from work experience)',
  list(competencies.map((c) => `${c.title}: ${c.skills.join(', ')}`)));

degrees.forEach((d) => {
  add('education', `${d.titleLines.join(' ')} — ${d.subtitle} (${d.year})`, [
    d.honour ? `Grade: ${d.honour}` : '',
    d.description,
    list(d.stats.map((s) => `${s.strong}: ${s.span}`)),
  ].filter(Boolean).join('\n'));
});
smuCourses.forEach((c) => {
  add('education', `SMU course: ${c.title}`, `${c.desc}\nSkills: ${c.tags.join(', ')}`);
});
add('education', 'Ngee Ann Polytechnic diploma modules',
  list(npModules.map((g) => `${g.group}: ${g.items.map((m) => `${m.name} (${m.skill})`).join(', ')}`)));
add('education', 'Academic milestones', list(milestones.map((m) => `${m.date} — ${m.title}: ${m.desc}`)));

allProjects.forEach((p) => {
  add('projects', `${p.kind}: ${p.title}`, [
    p.description,
    `Tech/tags: ${p.tags.join(', ')}`,
    p.link ? `Link: ${p.link.startsWith('/') ? SITE_URL + encodeURI(p.link) : p.link}` : '',
    p.github ? `GitHub: ${p.github}` : '',
  ].filter(Boolean).join('\n'));
});

add('interests', 'Interests & activities overview', `${interestsIntro}\nQuote by Hong Teng: "${quote}"`);
timelineItems.forEach((t) => {
  add('interests', `Activity: ${t.title} (${t.date}, ${t.duration})`,
    [t.description, `Tags: ${t.tags.join(', ')}`, t.url ? `Link: ${t.url}` : ''].filter(Boolean).join('\n'));
});

// --- Lightweight keyword retrieval (BM25-ish), no external services needed ---

const STOPWORDS = new Set(('a an and are as at be been but by can could did do does for from had has have he her his how i ' +
  'if in into is it its me my of on or our she so tell than that the their them they this to was we were what when where which ' +
  'who whom why will with would you your about any some more much many also just hong teng lee ht him').split(' '));

const stem = (w) => w.replace(/(ing|ed|es|s)$/, '').replace(/(.)\1$/, '$1');
const tokenize = (text) =>
  (text.toLowerCase().match(/[a-z0-9.+#]+/g) || [])
    .map((w) => w.replace(/^\.+|\.+$/g, ''))
    .filter((w) => w.length > 1 && !STOPWORDS.has(w))
    .map(stem);

// Words that signal which section a question is about.
const SECTION_HINTS = {
  experience: 'work job role career company employer intern internship experience position analyst hdb ura twimbit jumbo ncode employ professional responsibilit achievement',
  education: 'study studied school university degree diploma course module gpa grade education smu ngee ann polytechnic exchange graduate graduated academic major',
  projects: 'project built build app application github portfolio hackathon side made create developed demo website tool',
  interests: 'hobby hobbies interest activity activities volunteer volunteering cca club toastmasters food blog leadership community mentor free time outside',
};
const sectionHints = Object.fromEntries(
  Object.entries(SECTION_HINTS).map(([s, words]) => [s, new Set(words.split(' ').map(stem))]),
);

const indexed = chunks.map((c) => {
  const titleTokens = new Set(tokenize(c.title));
  const tokens = tokenize(c.text);
  const tf = new Map();
  tokens.forEach((t) => tf.set(t, (tf.get(t) || 0) + 1));
  return { ...c, titleTokens, tf, length: tokens.length, tokens: estimateTokens(c.text) };
});
const avgLength = indexed.reduce((n, c) => n + c.length, 0) / indexed.length;
const docFreq = new Map();
indexed.forEach((c) => c.tf.forEach((_, t) => docFreq.set(t, (docFreq.get(t) || 0) + 1)));
const idf = (t) => Math.log(1 + (indexed.length - (docFreq.get(t) || 0) + 0.5) / ((docFreq.get(t) || 0) + 0.5));

function score(chunk, terms) {
  let s = 0;
  terms.forEach(({ term, weight }) => {
    const f = chunk.tf.get(term) || 0;
    if (f) s += weight * idf(term) * ((f * 2.2) / (f + 1.2 * (0.25 + 0.75 * (chunk.length / avgLength))));
    if (chunk.titleTokens.has(term)) s += weight * idf(term);
    if (sectionHints[chunk.section].has(term)) s += weight * 0.6;
  });
  return s;
}

/**
 * Returns the context block for a question: profile + overview always, plus the
 * best-matching detail chunks up to `budget` tokens. `previousQuestion` lets
 * follow-ups ("tell me more about that") stay on topic.
 */
export function buildContext(question, previousQuestion = '', budget = 1600) {
  const terms = [
    ...tokenize(question).map((term) => ({ term, weight: 1 })),
    ...tokenize(previousQuestion).map((term) => ({ term, weight: 0.4 })),
  ];
  const ranked = indexed
    .map((c) => ({ c, s: score(c, terms) }))
    .filter((r) => r.s > 0.5)
    .sort((a, b) => b.s - a.s);
  const cutoff = ranked.length ? ranked[0].s * 0.35 : 0;

  const picked = [];
  let used = 0;
  for (const { c, s } of ranked) {
    if (s < cutoff) break;
    if (used + c.tokens > budget) continue;
    picked.push(c);
    used += c.tokens;
    if (picked.length >= 8) break;
  }
  return [profileText, indexText, ...picked.map((c) => c.text)].join('\n\n');
}

// Every URL / email that appears in the site content. Replies may only contain these,
// so an injected prompt can't make the bot hand out a phishing link.
const corpus = [profileText, indexText, ...chunks.map((c) => c.text)].join('\n');
export const normalizeUrl = (u) => u.replace(/[.,;:!?]+$/, '').replace(/\/+$/, '').toLowerCase();
export const allowedUrls = new Set((corpus.match(/https?:\/\/[^\s)]+/g) || []).map(normalizeUrl));
export const allowedEmails = new Set(
  (corpus.match(/[\w.+-]+@[\w-]+\.[\w.]+/g) || []).map((e) => e.replace(/\.+$/, '').toLowerCase()),
);

export const profileName = profile.name;
export const profilePronouns = profile.pronouns;
export const contactEmail = contact.email;
export const contactLinkedin = contact.linkedin;
