// deidentify.mjs — strip copyrighted verbatim scale text from the PUBLIC DEMO build.
// Removes the item text of MADRS, CADSS, and the C-SSRS screener questions (all licensed),
// leaving structure + scoring intact and marking them locked. Free scales (PHQ-9, GAD-7,
// QIDS) are untouched. Idempotent-ish: asserts each anchor is found exactly once.
import { readFileSync, writeFileSync } from 'node:fs';

let html = readFileSync('index.html', 'utf8');

function replaceOnce(name, re, to) {
  const m = html.match(re);
  if (!m) { console.error(`FAIL: anchor not found for "${name}"`); process.exit(1); }
  const g = html.match(new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g'));
  if (g && g.length > 1) { console.error(`FAIL: ${name} matched ${g.length}x (want 1)`); process.exit(1); }
  html = html.replace(re, to);
  console.log(`ok: ${name}`);
}

// 1) MADRS — drop verbatim anchor text, keep scoring, mark locked
replaceOnce('MADRS items',
  /(max:60, anchorScale:6,)\s*items:\[[\s\S]*?\],(\s*score:a=>a\.reduce)/,
  '$1 locked:true, items:[],$2');

// 2) CADSS — drop 23 verbatim items, keep scoring, mark locked
replaceOnce('CADSS items',
  /(options:CADSS_OPTS,max:92,)\s*items:\[[\s\S]*?\],(\s*score:a=>a\.reduce)/,
  '$1 locked:true, items:[],$2');

// 3) C-SSRS — stub the verbatim screener questions (kept only as generic labels)
replaceOnce('C-SSRS Q text',
  /const Q=\[[\s\S]*?\n  \];/,
  `const Q=[
    {n:1,t:'Wish to be dead',q:'(licensed C-SSRS item — omitted in public demo)'},
    {n:2,t:'Suicidal thoughts',q:'(licensed C-SSRS item — omitted in public demo)'},
    {n:3,t:'Thoughts with method (no plan/intent)',q:'(licensed C-SSRS item — omitted in public demo)',dep:2},
    {n:4,t:'Some intent (no plan)',q:'(licensed C-SSRS item — omitted in public demo)',dep:2},
    {n:5,t:'Plan & intent',q:'(licensed C-SSRS item — omitted in public demo)',dep:2},
    {n:6,t:'Suicidal behavior (lifetime)',q:'(licensed C-SSRS item — omitted in public demo)'}
  ];`);

// Guard: no signature copyrighted phrases may remain
const banned = ['Apparent sadness', 'moving in slow motion', 'wished you were dead',
                'Looks miserable all the time', 'more than one identity'];
const still = banned.filter(p => html.includes(p));
if (still.length) { console.error('FAIL: copyrighted text still present:', still); process.exit(1); }

writeFileSync('index.html', html);
console.log('done — copyrighted scale text removed; scales marked locked.');
