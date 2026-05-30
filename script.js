/* ============================================================
   Azerothian Guess — script.js
   Modes: Daily (one word/day, persisted) + Endless (unlimited)
   Hints: unlocked after 3 wrong guesses
   ============================================================ */

// ── Word Data ───────────────────────────────────────────────
// Loaded from words.js (must be included before this script).
// See words.js to add, remove, or edit entries.

// ── Decode ──────────────────────────────────────────────────
const WORDS = WORD_DATA.map(entry => ({
  word:     atob(entry.w).toUpperCase(),
  category: entry.c,
  hint:     entry.h
}));

// ── Constants ───────────────────────────────────────────────
const MAX_WRONG  = 6;
const BODY_PARTS = ['part-head','part-body','part-larm','part-rarm','part-lleg','part-rleg'];
const ROWS = [
  { id: 'row1', keys: 'QWERTYUIOP'.split('') },
  { id: 'row2', keys: 'ASDFGHJKL'.split('')  },
  { id: 'row3', keys: 'ZXCVBNM'.split('')    }
];

// ── Game State ───────────────────────────────────────────────
let mode          = 'daily';   // 'daily' | 'endless'
let currentEntry  = null;      // { word, category, hint }
let guessedLetters = new Set();
let wrongGuesses  = [];
let gameOver      = false;
let hintUsed      = false;
// Scores are completely separate per mode — never shared
let dailyScore    = 0;
let endlessScore  = 0;
let streak        = 0;   // daily win streak
let endlessStreak = 0;   // endless run streak

// ── Storage helpers (localStorage — no cookies, no consent needed) ──
// All data is stored locally on the user's own device only.
// Nothing is sent to any server. GDPR strictly requires consent only
// for cookies/tracking that leave the device — localStorage does not.
function lsGet(key) {
  try { return localStorage.getItem('ag_' + key); } catch(e) { return null; }
}
function lsSet(key, value) {
  try { localStorage.setItem('ag_' + key, value); } catch(e) {}
}

// ── Date helpers ─────────────────────────────────────────────
function todayStr() {
  return new Date().toLocaleDateString('en-CA');
}
function hasPlayedToday() {
  return lsGet('lastPlayed') === todayStr();
}
function markPlayedToday() {
  lsSet('lastPlayed', todayStr());
}

// ── Word selection ───────────────────────────────────────────
function getDailyEntry() {
  const start = new Date('2024-01-01');
  const today = new Date();
  const diff  = Math.floor((today - start) / 86400000);
  return WORDS[diff % WORDS.length];
}

function getRandomEntry(excludeWord) {
  let entry;
  do {
    entry = WORDS[Math.floor(Math.random() * WORDS.length)];
  } while (entry.word === excludeWord);
  return entry;
}

// ── Load / Save stats ────────────────────────────────────────
function loadStats() {
  dailyScore    = parseInt(lsGet('dailyScore'),    10) || 0;
  endlessScore  = parseInt(lsGet('endlessScore'),  10) || 0;
  streak        = parseInt(lsGet('streak'),        10) || 0;
  endlessStreak = parseInt(lsGet('endlessStreak'), 10) || 0;
}
function saveStats() {
  lsSet('dailyScore',    dailyScore);
  lsSet('endlessScore',  endlessScore);
  lsSet('streak',        streak);
  lsSet('endlessStreak', endlessStreak);
}
function renderStats() {
  if (mode === 'daily') {
    document.getElementById('score-value').textContent  = dailyScore;
    document.getElementById('streak-value').textContent = streak;
  } else {
    document.getElementById('score-value').textContent  = endlessScore;
    document.getElementById('streak-value').textContent = endlessStreak;
  }
}

// ── Mode UI ──────────────────────────────────────────────────
function setMode(m) {
  mode = m;
  document.getElementById('btn-mode-daily').classList.toggle('active', m === 'daily');
  document.getElementById('btn-mode-endless').classList.toggle('active', m === 'endless');
  document.getElementById('streak-label').textContent = m === 'endless' ? 'Run' : 'Streak';
}

// ── Dynamic font size for word display ───────────────────────
// Returns the largest font size (px) where the longest single word
// in the phrase fits on one line within the container width.
function calcLetterFontSize(word) {
  const gc = document.getElementById('game-container');
  const availW = gc ? gc.clientWidth - 32 : window.innerWidth - 32;
  const gap = Math.min(Math.max(3, window.innerWidth * 0.008), 12);

  // Find the longest word (most characters) — that's the constraint
  const parts = word.split(' ');
  const maxLen = Math.max(...parts.map(p => p.length));

  // Each letter slot: fontSize * 1.1em wide + gap px between slots
  // maxLen slots + (maxLen-1) gaps <= availW
  // fontSize * 1.1 * maxLen + gap * (maxLen - 1) <= availW
  // fontSize <= (availW - gap*(maxLen-1)) / (1.1 * maxLen)
  const maxPx = (availW - gap * (maxLen - 1)) / (1.1 * maxLen);
  const ceiling = Math.min(window.innerWidth * 0.032, 46);
  return Math.max(12, Math.min(ceiling, maxPx));
}

// ── Render word ──────────────────────────────────────────────
function renderWord() {
  const container = document.getElementById('word-display');
  container.innerHTML = '';
  const parts = currentEntry.word.split(' ');

  // Set font size so the longest single word fits on one line.
  // Wrapping happens between whole words, never mid-word.
  const fontSize = calcLetterFontSize(currentEntry.word);
  container.style.setProperty('--letter-fs', fontSize + 'px');

  parts.forEach((part) => {
    // Each word gets its own no-wrap group
    const group = document.createElement('div');
    group.classList.add('word-group');

    [...part].forEach(ch => {
      const slot = document.createElement('div');
      slot.classList.add('letter-slot');

      const char = document.createElement('div');
      char.classList.add('letter-char');
      const isAlpha = /[A-Z]/.test(ch);

      if (!isAlpha || guessedLetters.has(ch)) {
        char.textContent = ch;
        if (isAlpha) slot.classList.add('revealed');
      }

      const line = document.createElement('div');
      line.classList.add('letter-underline');
      if (!isAlpha) line.style.visibility = 'hidden';

      slot.appendChild(char);
      slot.appendChild(line);
      group.appendChild(slot);
    });

    container.appendChild(group);
  });
}

// ── Gallows ──────────────────────────────────────────────────
function renderGallows() {
  const dead = wrongGuesses.length >= MAX_WRONG;
  BODY_PARTS.forEach((id, i) => {
    const el = document.getElementById(id);
    el.classList.toggle('visible', i < wrongGuesses.length);
    el.classList.toggle('dead',    dead && i < wrongGuesses.length);
  });
  document.getElementById('wrong-num').textContent = wrongGuesses.length;
}

// ── Wrong letters ────────────────────────────────────────────
function renderWrong() {
  const el = document.getElementById('wrong-letters');
  el.textContent = wrongGuesses.length ? 'Wrong: ' + wrongGuesses.join(' · ') : '';
}

// ── Hint button ──────────────────────────────────────────────
function updateHintButton() {
  const btn = document.getElementById('btn-hint');
  if (hintUsed) {
    btn.textContent = `💡 ${currentEntry.category} — ${currentEntry.hint}`;
    btn.classList.add('used');
    btn.disabled = true;
    btn.style.display = 'block';
  } else if (wrongGuesses.length >= 3 && !gameOver) {
    btn.style.display = 'block';
    btn.disabled = false;
    btn.classList.remove('used');
    btn.textContent = '💡 Reveal Hint (-5 pts)';
  } else {
    btn.style.display = 'none';
  }
}

// ── Keyboard ─────────────────────────────────────────────────
function buildKeyboard() {
  ROWS.forEach(({ id, keys }) => {
    const row = document.getElementById(id);
    row.innerHTML = '';
    keys.forEach(k => {
      const btn = document.createElement('button');
      btn.textContent = k;
      btn.dataset.key = k;
      btn.className   = 'kb-key';
      btn.onclick     = () => guess(k);
      row.appendChild(btn);
    });
  });
}

function updateKeyboard() {
  document.querySelectorAll('.kb-key').forEach(btn => {
    const k = btn.dataset.key;
    if (guessedLetters.has(k)) {
      btn.disabled = true;
      const correct = new Set(currentEntry.word.replace(/[^A-Z]/g, '').split('')).has(k);
      btn.classList.toggle('correct', correct);
      btn.classList.toggle('wrong',  !correct);
    } else {
      btn.disabled = gameOver;
      btn.classList.remove('correct', 'wrong');
    }
  });
}

// ── Guess logic ──────────────────────────────────────────────
function guess(letter) {
  if (gameOver || guessedLetters.has(letter)) return;
  guessedLetters.add(letter);

  const wordSet = new Set(currentEntry.word.replace(/[^A-Z]/g, '').split(''));
  if (wordSet.has(letter)) {
    if (mode === 'daily') { dailyScore += 1; } else { endlessScore += 1; }
  } else {
    wrongGuesses.push(letter);
  }

  renderWord();
  renderGallows();
  renderWrong();
  updateKeyboard();
  updateHintButton();
  saveStats();
  renderStats();
  checkEnd();
}

function checkEnd() {
  const allRevealed = [...currentEntry.word].every(ch => !/[A-Z]/.test(ch) || guessedLetters.has(ch));
  const failed      = wrongGuesses.length >= MAX_WRONG;

  if (allRevealed) {
    gameOver = true;
    if (mode === 'daily') { dailyScore += 10; streak += 1; markPlayedToday(); }
    else                  { endlessScore += 10; endlessStreak += 1; }
    saveStats();
    renderStats();
    document.getElementById('message').textContent = mode === 'endless'
      ? `Correct! +10 pts 🎉`
      : `For the Alliance! (or Horde…)`;
    document.getElementById('game-container').classList.add('state-won');
    document.removeEventListener('keydown', onKeyDown);
    updateHintButton();
    setTimeout(() => showEndModal(true), mode === 'endless' ? 1200 : 900);
  } else if (failed) {
    gameOver = true;
    if (mode === 'daily') { streak = 0; markPlayedToday(); }
    else                  { endlessStreak = 0; }
    saveStats();
    renderStats();
    document.getElementById('message').textContent = `The hero has fallen! The word was "${currentEntry.word}"`;
    document.getElementById('game-container').classList.add('state-lost');
    document.removeEventListener('keydown', onKeyDown);
    updateHintButton();
    setTimeout(() => showEndModal(false), 900);
  }
}

// ── Keyboard handler ─────────────────────────────────────────
function onKeyDown(e) {
  const letter = e.key.toUpperCase();
  if (/^[A-Z]$/.test(letter) && !gameOver) guess(letter);
}

// ── Init / Start game ────────────────────────────────────────
function initGame(entry) {
  currentEntry   = entry;
  guessedLetters = new Set();
  wrongGuesses   = [];
  gameOver       = false;
  hintUsed       = false;

  document.getElementById('message').textContent = '';
  document.getElementById('game-container').classList.remove('state-won', 'state-lost');

  buildKeyboard();
  renderWord();
  renderGallows();
  renderWrong();
  updateHintButton();
  renderStats();

  document.removeEventListener('keydown', onKeyDown);
  document.addEventListener('keydown', onKeyDown);
}

function startDaily() {
  setMode('daily');
  closeModal('modal-instructions');

  if (hasPlayedToday()) {
    // Show board but locked
    initGame(getDailyEntry());
    gameOver = true;
    updateKeyboard();
    document.getElementById('message').textContent = "You've already played today — come back at midnight!";
    return;
  }
  initGame(getDailyEntry());
}

function startEndless() {
  setMode('endless');
  closeModal('modal-instructions');
  initGame(getRandomEntry(''));
}

function nextEndless() {
  closeModal('modal-endgame');
  const prev = currentEntry ? currentEntry.word : '';
  initGame(getRandomEntry(prev));
}

// ── Hint ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-hint').addEventListener('click', () => {
    if (hintUsed || wrongGuesses.length < 3 || gameOver) return;
    hintUsed = true;
    if (mode === 'daily') { dailyScore = Math.max(0, dailyScore - 5); }
    else                  { endlessScore = Math.max(0, endlessScore - 5); }
    saveStats();
    renderStats();
    updateHintButton();
  });
});

// ── Modals ───────────────────────────────────────────────────
function openModal(id)  { document.getElementById(id).classList.add('open');    }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

function showEndModal(won) {
  const guessArr = [...guessedLetters];
  const wordSet  = new Set(currentEntry.word.replace(/[^A-Z]/g, '').split(''));
  const emoji    = guessArr.map(l => wordSet.has(l) ? '🟩' : '🟥').join('');

  document.getElementById('end-title').textContent = won ? '⚔ Victory! ⚔' : '💀 Defeated 💀';
  document.getElementById('end-rune').textContent  = won ? '✦' : '💀';
  document.getElementById('end-rune2').textContent = won ? '✦' : '💀';

  const hintLine = hintUsed ? `\nHint used: ${currentEntry.category} — ${currentEntry.hint}` : '';
  document.getElementById('end-message').textContent = won
    ? `You uncovered "${currentEntry.word}" with ${wrongGuesses.length} wrong guess${wrongGuesses.length !== 1 ? 'es' : ''}!`
    : `The word was "${currentEntry.word}". Better luck next time!`;

  document.getElementById('share-emoji').textContent = emoji;

  const modeLabel = mode === 'endless' ? 'Endless' : 'Daily';
  document.getElementById('share-text').value = [
    `🗡 Azerothian Guess (${modeLabel}) 🗡`,
    `${won ? 'Won' : 'Lost'} · ${wrongGuesses.length}/${MAX_WRONG} wrong${hintLine}`,
    emoji,
    `https://i-am-t3x.github.io/Azerothian-Guess/`
  ].join('\n');

  // Endless mode: show "Next Word". Daily mode: show "Switch to Endless".
  document.getElementById('btn-next-word').style.display    = mode === 'endless' ? 'block' : 'none';
  document.getElementById('btn-play-endless').style.display = mode === 'daily'   ? 'block' : 'none';

  openModal('modal-endgame');
}

// ── Copy ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-copy').addEventListener('click', async () => {
    const text    = document.getElementById('share-text').value;
    const confirm = document.getElementById('copy-confirm');
    try { await navigator.clipboard.writeText(text); }
    catch { const ta = document.getElementById('share-text'); ta.select(); document.execCommand('copy'); }
    confirm.classList.add('show');
    setTimeout(() => confirm.classList.remove('show'), 2000);
  });

  document.getElementById('btn-next-word').addEventListener('click', nextEndless);
  document.getElementById('btn-play-endless').addEventListener('click', () => {
    closeModal('modal-endgame');
    startEndless();
  });
  document.getElementById('btn-start-daily').addEventListener('click', startDaily);
  document.getElementById('btn-start-endless').addEventListener('click', startEndless);

  document.getElementById('btn-mode-daily').addEventListener('click', () => {
    // Already in daily and game is in progress — do nothing
    if (mode === 'daily' && !gameOver && currentEntry) return;
    closeModal('modal-endgame');
    closeModal('modal-instructions');
    startDaily();
  });
  document.getElementById('btn-mode-endless').addEventListener('click', () => {
    // Already in endless and game is in progress — do nothing
    if (mode === 'endless' && !gameOver && currentEntry) return;
    closeModal('modal-endgame');
    closeModal('modal-instructions');
    startEndless();
  });
});

// ── Privacy banner ──────────────────────────────────────────
// Show once; dismissed state persisted in localStorage (no cookie needed)
function initPrivacyBanner() {
  if (lsGet('privacyDismissed') === '1') return;
  const banner = document.getElementById('privacy-banner');
  if (!banner) return;
  banner.style.display = 'flex';

  document.getElementById('privacy-ok').addEventListener('click', () => {
    lsSet('privacyDismissed', '1');
    banner.style.display = 'none';
  });

  document.getElementById('privacy-more').addEventListener('click', (e) => {
    e.preventDefault();
    alert(
      'Azerothian Guess — Data & Privacy\n\n' +
      'This game stores the following data ONLY on your device:\n' +
      '  • Your daily and endless scores\n' +
      '  • Your win streaks\n' +
      '  • Whether you have already played today (daily mode)\n' +
      '  • Whether you have dismissed this notice\n\n' +
      'Storage method: window.localStorage\n' +
      'Data never leaves your device. No server, no tracking,\n' +
      'no analytics, no third-party scripts beyond Google Fonts.\n\n' +
      'To delete all saved data: open your browser DevTools,\n' +
      'go to Application → Local Storage and clear entries\n' +
      'prefixed with "ag_".'
    );
  });
}

// ── Boot ─────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  loadStats();
  renderStats();
  initPrivacyBanner();
  openModal('modal-instructions');
});

// Re-scale word on window resize (orientation change, window drag, etc.)
window.addEventListener('resize', () => {
  if (currentEntry) renderWord();
});
