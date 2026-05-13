const input = document.getElementById('cmd-input');
const breadcrumb = document.getElementById('breadcrumb');

let history = [];
let histIdx  = -1;

const COMPLETIONS = Object.keys(COMMANDS);

// ── Breadcrumb ────────────────────────────────────────────────────────────────

function updateBreadcrumb(cmd) {
  if (!breadcrumb) return;
  const sectionMap = {
    experience: 'experience', skills: 'skills', education: 'education',
    projects: 'projects', hackathons: 'hackathons', contact: 'contact',
    interests: 'interests', about: 'about', whoami: 'whoami',
    neofetch: 'neofetch', cv: 'cv',
  };
  if (!sectionMap[cmd]) return;
  breadcrumb.innerHTML =
    `<span class="bc-item" onclick="runCmd('ls')">~</span>` +
    `<span class="bc-sep"> / </span>` +
    `<span class="bc-cur">${cmd}</span>`;
}

// ── Prompt helpers ────────────────────────────────────────────────────────────

function ps1() {
  return `<span class="ps1-user">ari</span><span class="ps1-at">@</span>` +
         `<span class="ps1-host">bjorn</span><span class="ps1-sep">:</span>` +
         `<span class="ps1-path">~</span><span class="ps1-dollar"> $</span>`;
}

function echoPrompt(cmd) {
  append(`${ps1()} <span class="cmd-text">${cmd}</span>`, 'line prompt-line');
}

// ── Run a command (also used by click handlers) ───────────────────────────────

function runCmd(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return;

  history.unshift(trimmed);
  histIdx = -1;

  echoPrompt(trimmed);
  nl();

  const [cmd, ...rest] = trimmed.split(/\s+/);
  const args = rest.join(' ');
  const fn = COMMANDS[cmd.toLowerCase()];

  if (fn) {
    fn(args);
    updateBreadcrumb(cmd.toLowerCase());
  } else {
    append(`<span class="c-red">command not found:</span> ${cmd}  <span class="c-gray">— try <span class="c-green">help</span></span>`);
    nl();
  }
}

// ── Tab suggestion strip ──────────────────────────────────────────────────────

let tabStrip   = null;
let tabMatches = [];
let tabCursor  = 0;

function showTabStrip(matches, partial) {
  dismissTabStrip();
  tabMatches = matches;
  tabCursor  = 0;

  const strip = document.createElement('div');
  strip.className = 'tab-strip';
  strip.id = 'tab-strip-active';

  matches.forEach((cmd, i) => {
    const chip = document.createElement('span');
    chip.className = 'tab-chip';
    chip.textContent = cmd;
    chip.addEventListener('mouseenter', () => setTabCursor(i));
    chip.addEventListener('click', () => pickTabMatch(cmd));
    strip.appendChild(chip);
  });

  out.appendChild(strip);
  out.scrollTop = out.scrollHeight;
  tabStrip = strip;
  setTabCursor(0);
}

function setTabCursor(i) {
  if (!tabStrip) return;
  tabCursor = (i + tabMatches.length) % tabMatches.length;
  tabStrip.querySelectorAll('.tab-chip').forEach((el, j) =>
    el.classList.toggle('tab-chip-focused', j === tabCursor)
  );
  // Preview in input
  input.value = tabMatches[tabCursor];
}

function pickTabMatch(cmd) {
  dismissTabStrip();
  input.value = cmd;
  input.focus();
}

function dismissTabStrip() {
  if (tabStrip) { tabStrip.remove(); tabStrip = null; }
  tabMatches = [];
}

function tabHandleKey(e) {
  if (!tabStrip) return false;
  if (e.key === 'Tab') {
    e.preventDefault();
    setTabCursor(tabCursor + (e.shiftKey ? -1 : 1));
    return true;
  }
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault(); setTabCursor(tabCursor + 1); return true;
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault(); setTabCursor(tabCursor - 1); return true;
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    pickTabMatch(tabMatches[tabCursor]);
    return true;
  }
  if (e.key === 'Escape') {
    dismissTabStrip();
    input.value = '';
    return true;
  }
  return false;
}

// ── Keyboard input ────────────────────────────────────────────────────────────

input.addEventListener('keydown', e => {
  // Tab strip takes priority when visible
  if (tabHandleKey(e)) return;

  // ls grid: arrows always navigate the grid when it's active;
  // Enter/Escape only fire when the input is otherwise empty
  if (e.key.startsWith('Arrow') && lsHandleKey(e)) return;
  if (input.value === '' && lsHandleKey(e)) return;

  if (e.key === 'Enter') {
    dismissTabStrip();
    const val = input.value;
    input.value = '';
    runCmd(val);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (histIdx < history.length - 1) { histIdx++; input.value = history[histIdx]; }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (histIdx > 0) { histIdx--; input.value = history[histIdx]; }
    else { histIdx = -1; input.value = ''; }
  } else if (e.key === 'Tab') {
    e.preventDefault();
    const partial = input.value.trim();
    const matches = COMPLETIONS.filter(c => c.startsWith(partial));
    if (matches.length === 1) {
      input.value = matches[0];
    } else if (matches.length > 1) {
      showTabStrip(matches, partial);
    }
  } else if (e.key === 'l' && e.ctrlKey) {
    e.preventDefault();
    clear();
  } else if (e.key === 'c' && e.ctrlKey) {
    e.preventDefault();
    echoPrompt(input.value + '^C');
    input.value = '';
    nl();
  } else {
    // Any regular typing dismisses the tab strip
    dismissTabStrip();
  }
});

// Dismiss tab strip on outside click
document.addEventListener('click', e => {
  if (tabStrip && !e.target.closest('#tab-strip-active')) dismissTabStrip();
});

// Keep focus on input (desktop only — don't steal focus on mobile)
document.addEventListener('click', e => {
  if (window.innerWidth > 640 && !e.target.closest('.ls-item') && !e.target.closest('.nav-btn') && !e.target.closest('.bc-item')) {
    input.focus();
  }
});

// ── Boot sequence ─────────────────────────────────────────────────────────────

function boot() {
  const lines = [
    [50,  `<span class="boot">BIOS v2.1.0 — Ari Björn Ólafsson CV Edition</span>`],
    [150, `<span class="boot">Initialising hardware...  <span class="boot-ok">[ OK ]</span></span>`],
    [250, `<span class="boot">Loading personality modules (ISTJ)...  <span class="boot-ok">[ OK ]</span></span>`],
    [350, `<span class="boot">Mounting /experience, /skills, /projects...  <span class="boot-ok">[ OK ]</span></span>`],
    [500, `<span class="boot">Starting terminal session...  <span class="boot-ok">[ OK ]</span></span>`],
    [650, ``],
    [700, `<span class="ascii">${ASCII.replace(/\n/g, '<br>')}</span>`],
    [750, `<span class="c-green">Ari Björn Ólafsson</span>  <span class="c-gray">—</span>  <span class="c-blue">Full-Stack Developer & DevOps</span>`],
    [800, `<span class="c-gray">Reykjavik, Iceland</span>  <span class="c-dim">·</span>  <span class="c-gray">ari@dynamo.is</span>  <span class="c-dim">·</span>  <span class="c-gray">+354 778 1213</span>`],
    [850, ``],
    [900, `Use <span class="c-yellow">↑↓←→</span> to navigate, <span class="c-yellow">Enter</span> to open, or type a command.`],
    [950, ``],
  ];
  lines.forEach(([delay, html]) => setTimeout(() => append(html), delay));
  setTimeout(() => { echoPrompt('ls'); nl(); ls(); }, 1050);
}

boot();
