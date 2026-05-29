/* ============================================================
   Azerothian Guess — script.js
   ============================================================ */

// ──────────────────────────────────────────────────────────────
// Word list: proper WoW nouns only — full zone/character names
// Base64-encoded to keep them hidden until played
// ──────────────────────────────────────────────────────────────
const ENCODED_WORDS = [
  "QWJlcnJ1cw==","QWdncmFtYXI=","QWxleHN0cmFzemE=","QWxsZXJpYQ==","QWxsaWFuY2U=",
  "QW1hbidUaHVs","QW1pcmRyYXNzaWw=","QW5kdWlu","QW50b3J1cw==","QXJhdGhp",
  "QXJjaGltb25kZQ==","QXJkZW53ZWFsZA==","QXJndXM=","QXJ0aGFz","QXNoYnJpbmdlcg==",
  "QXNoZW52YWxl","QXNodmFuZQ==","QXViZXJkaW5l","QXplcml0ZQ==","QXplcm90aA==",
  "QXpzaGFyYQ==","QXpzdW5h","QmFkbGFuZHM=","QmFycmVucw==","QmFzdGlvbg==",
  "QmF0dGxlIG9mIERhemFyJ2Fsb3I=","QmxhY2tmYXRob20gRGVlcHM=","QmxhY2tyb2Nr",
  "QmxhY2t3aW5nIERlc2NlbnQ=","QmxhY2t3aW5nIExhaXI=","QmxhZGUncyBFZGdl",
  "Qmxvb2Rob29m","Qm9sdmFy","Qm9vdHkgQmF5","Qm9yZWFu","QnJvbnplYmVhcmQ=",
  "QnVybmluZyBMZWdpb24=","QndvbnNhbWRp","Q2FzdGxlIE5hdGhyaWE=","Q2hyb21hdHVz",
  "Q2hyb21pZQ==","Q3J1Y2libGUgb2YgU3Rvcm1z","Q3J5c3RhbHNvbmc=","RGFsYXJhbg==",
  "RGFya3Nob3Jl","RGFybmFzc3Vz","RGVhZG1pbmVz","RGVhZHdpbmQ=","RGVhdGh3aW5n",
  "RGVlcGhvbG0=","RGVmaWFzIEJyb3RoZXJob29k","RGVuYXRocml1cw==","RGVzb2xhY2U=",
  "RGltZW5zaXVz","RGlyZSBNYXVs","RG9vbWhhbW1lcg==","RHJhZW5laQ==","RHJhZW5vcg==",
  "RHJhZ29uIFNvdWw=","RHJhZ29uYmxpZ2h0","RHJlYWQgV2FzdGVz","RHJ1c3Q=","RHJ1c3R2YXI=",
  "RHVyb3Rhcg==","RHVza3dvb2Q=","RHVzdHdhbGxvdw==","RWx3eW5u","RW9uYXI=",
  "RXRlcm5hbCBQYWxhY2U=","RXZlcnNvbmc=","RXhvZGFy","RmFsc3RhZA==","RmVsd29vZA==",
  "RmVyYWxhcw==","RmlyZWxhbmRz","Rm9yZHJhZ29u","Rm9yc2FrZW4=","RnJlZWhvbGQ=",
  "RnJleWE=","RnJvc3Rib2x0","RnJvc3RmaXJl","RnJvc3Rtb3VybmU=","R2FkZ2V0emFu",
  "R2FsbHl3aXg=","R2Fycm9zaA==","R2hvc3RsYW5kcw==","R2lsbmVhcw==","R25vbWVyZWdhbg==",
  "R29yZ3JvbmQ=","R3JleW1hbmU=","R3JpenpseSBIaWxscw==","R3J1dWwncyBMYWly","R3VsJ2Rhbg==",
  "SGFra2Fy","SGFtbWVyZmFsbA==","SGVhcnQgb2YgRmVhcg==","SGVsbGZpcmU=",
  "SGVsbGZpcmUgQ2l0YWRlbA==","SGVsbHNjcmVhbQ==","SGVseWE=","SGlnaG1hdWw=",
  "SGlnaG1vdW50YWlu","SGlsbHNicmFk","SG9kaXI=","SG9yZGU=","SG93bGluZyBGam9yZA==",
  "SHlqYWw=","SWNlY3Jvd24=","SWNlY3Jvd24gQ2l0YWRlbA==","SWwnZ3lub3Ro","SWxsaWRhbg==",
  "SXJvbmZvcmdl","SXJvbnNwaXJl","SmFkZSBGb3Jlc3Q=","SmFpbmE=","S2FsZWNnb3M=",
  "S2FsaW1kb3I=","S2FyYWJvcg==","S2FyYXpoYW4=","S2hhZGdhcg==","S2hheidnb3JvdGg=",
  "S2lsJ2phZWRlbg==","S29ydGhpYQ==","S3Jhc2FyYW5n","S3VsIFRpcmFu","S3VuLUxhaQ==",
  "S3ZhbGRpcg==","TGlmZWJsb29t","TGlnaHQncyBIb3Bl","TGlnaHRmb3JnZWQ=","TG9yJ3RoZW1hcg==",
  "TWFnbmk=","TWFsZHJheHh1cw==","TWFsZnVyaW9u","TWFseWdvcw==","TWFubm9yb3Ro",
  "TWFudGlk","TWFyYXVkb24=","TWVjaGFnbm9tZQ==","TWVjaGFnb24=","TWVkaXZo",
  "TWVra2F0b3JxdWU=","TWVuZXRoaWw=","TWltaXJvbg==","TW9sdGVuIENvcmU=","TW9vbmdsYWRl",
  "TW9yb2do","TXVsZ29yZQ==","TXVyYWRpbg==","TmFhcnU=","TmFncmFuZA==","TmF0aGFub3M=",
  "TmF4eHJhbWFz","TmF6amF0YXI=","TmF6bWly","TmVmYXJpYW4=","TmVsdGhhcmlvbg==",
  "TmVyJ3podWw=","TmVydWJpYW5z","TmV0aGVyZ2FyZGU=","TmV0aGVyc3Rvcm0=",
  "TmlnaHRib3JuZQ==","TmlnaHRob2xk","Tm9yZ2Fubm9u","Tm9ydGhyZW5k","Tm96ZG9ybXU=",
  "TnknYWxvdGhh","T2R5bg==","T255eGlh","T3JncmltbWFy","T3V0bGFuZA==","UGFuZGFyZW4=",
  "UGFuZGFyaWE=","UGxhZ3VlbGFuZHM=","UHJvdWRtb29yZQ==","UHlyb2JsYXN0",
  "UmFnZWZpcmUgQ2hhc20=","UmFnbmFyb3M=","UmFzdGFraGFu","UmF0Y2hldA==",
  "UmF6b3JmZW4gS3JhdWw=","UmVkcmlkZ2U=","UmVqdXZlbmF0aW9u","UmV2ZW5kcmV0aA==",
  "UmV6YW4=","U2FuY3R1bSBvZiBEb21pbmF0aW9u","U2FyZ2VyYXM=","U2F1cmZhbmc=",
  "U2NhcmxldCBNb25hc3Rlcnk=","U2Nob2xvbWFuY2U=","U2NvdXJnZQ==","U2VwdWxjaGVy",
  "U2VycGVudHNocmluZQ==","U2V0aHJhaw==","U2hhZG93ZmFuZyBLZWVw","U2hhZG93bGFuZHM=",
  "U2hhZG93bWVsZA==","U2hhZG93bW9vbg==","U2hhbGFtYXluZQ==","U2hhdHRyYXRo",
  "U2hvbGF6YXI=","U2llZ2Ugb2YgT3JncmltbWFy","U2lsaXRodXM=","U2lsdmVybW9vbg==",
  "U2lsdmVycGluZQ==","U291dGhzaG9yZQ==","U3BpcmVzIG9mIEFyYWs=","U3RhcmZhbGw=",
  "U3RvcmUgUGVha3M=","U3Rvcm1oZWlt","U3Rvcm1yYWdl","U3Rvcm1zb25n","U3Rvcm13aW5k",
  "U3RyYW5nbGV0aG9ybg==","U3RyYXRob2xtZQ==","U3Vua2VuIFRlbXBsZQ==","U3Vud2VsbA==",
  "U3VyYW1hcg==","U3lsdmFuYXM=","VGFsYWRvcg==","VGFsYW5qaQ==","VGFuYWFu","VGFuYXJpcw==",
  "VGFycmVuIE1pbGw=","VGVsZHJhc3NpbA==","VGVtcGVzdCBLZWVw","VGVyb2trYXI=",
  "VGhlcmFtb3Jl","VGhlcm9u","VGhyYWxs","VGhyb25lIG9mIFRodW5kZXI=",
  "VGhyb25lIG9mIHRoZSBGb3VyIFdpbmRz","VGlyYWdhcmRl","VGlyaXNmYWw=",
  "VG9tYiBvZiBTYXJnZXJhcw==","VG9ydG9sbGFu","VG93bmxvbmc=","VHVyYWx5b24=",
  "VHdpbGlnaHQgSGlnaGxhbmRz","VHlyJ3MgSGFuZA==","VHlyYW5kZQ==","VWxkYW1hbg==",
  "VWxkaXI=","VWxkdWFy","VWxkdW0=","VW5kZXJjaXR5","VmFsJ3NoYXJhaA==",
  "VmFsZSBvZiBFdGVybmFsIEJsb3Nzb21z","VmFzaGppcg==","VmVsZW4=","VmVyZWVzYQ==",
  "Vm9sZHVu","VnJ5a3Vs","VnVscGVyYQ==","V2FpbGluZyBDYXZlcm5z","V2VzdGZhbGw=",
  "V2V0bGFuZHM=","V2hpc3BlcndpbmQ=","V2luZGZ1cnk=","V2luZHJ1bm5lcg==","V2ludGVyc3ByaW5n",
  "V29yZ2Vu","V3JhdGhpb24=","V3J5bm4=","WGFsJ2F0YXRo","WGF2aXVz","WWF1bmdvbA==",
  "WW9nZy1TYXJvbg==","WXNlcmE=","WmFuZGFsYXI=","WmFuZGFsYXJp","WmFuZ2FybWFyc2g=",
  "WmVyZXRoIE1vcnRpcw==","Wm92YWFs","WnVsJ0FtYW4=","WnVsJ0ZhcnJhaw==","WnVsJ0d1cnVi",
  "WnVsZGF6YXI="
];

// ──────────────────────────────────────────────────────────────
// Decode
// ──────────────────────────────────────────────────────────────
const WORDS = ENCODED_WORDS.map(w => atob(w));

// ──────────────────────────────────────────────────────────────
// Cookie helpers
// ──────────────────────────────────────────────────────────────
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

// ──────────────────────────────────────────────────────────────
// Game state
// ──────────────────────────────────────────────────────────────
const MAX_WRONG = 6;
const BODY_PARTS = ['part-head','part-body','part-larm','part-rarm','part-lleg','part-rleg'];

let chosenWord    = '';
let guessedLetters = new Set();
let wrongGuesses  = [];
let gameOver      = false;
let score         = 0;
let streak        = 0;

// ──────────────────────────────────────────────────────────────
// Word of the day
// ──────────────────────────────────────────────────────────────
function getWordOfDay() {
  const start  = new Date('2024-01-01');
  const today  = new Date();
  const diff   = Math.floor((today - start) / 86400000);
  return WORDS[diff % WORDS.length].toUpperCase();
}

function todayString() {
  return new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD
}

function hasPlayedToday() {
  return getCookie('lastPlayed') === todayString();
}

function markPlayedToday() {
  setCookie('lastPlayed', todayString(), 1);
}

// ──────────────────────────────────────────────────────────────
// Score & streak
// ──────────────────────────────────────────────────────────────
function loadStats() {
  score  = parseInt(getCookie('score'),  10) || 0;
  streak = parseInt(getCookie('streak'), 10) || 0;
}

function saveStats() {
  setCookie('score',  score,  365);
  setCookie('streak', streak, 365);
}

function renderStats() {
  document.getElementById('score-value').textContent  = score;
  document.getElementById('streak-value').textContent = streak;
}

// ──────────────────────────────────────────────────────────────
// Word display
// ──────────────────────────────────────────────────────────────
function renderWord() {
  const container = document.getElementById('word-display');
  container.innerHTML = '';

  // Split on actual spaces for multi-word answers
  const wordParts = chosenWord.split(' ');

  wordParts.forEach((part, wi) => {
    [...part].forEach(ch => {
      const slot = document.createElement('div');
      slot.classList.add('letter-slot');

      const char = document.createElement('div');
      char.classList.add('letter-char');

      // Show apostrophes, hyphens and other non-alpha chars always
      const isAlpha = /[A-Z]/.test(ch);
      if (!isAlpha || guessedLetters.has(ch)) {
        char.textContent = ch;
        if (isAlpha) slot.classList.add('revealed');
      } else {
        char.textContent = '';
      }

      const underline = document.createElement('div');
      underline.classList.add('letter-underline');
      if (!isAlpha) underline.style.visibility = 'hidden';

      slot.appendChild(char);
      slot.appendChild(underline);
      container.appendChild(slot);
    });

    // Space between words
    if (wi < wordParts.length - 1) {
      const sp = document.createElement('div');
      sp.classList.add('word-space');
      container.appendChild(sp);
    }
  });
}

// ──────────────────────────────────────────────────────────────
// Gallows
// ──────────────────────────────────────────────────────────────
function renderGallows() {
  const isDead = wrongGuesses.length >= MAX_WRONG;
  BODY_PARTS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (i < wrongGuesses.length) {
      el.classList.add('visible');
      if (isDead) el.classList.add('dead');
    } else {
      el.classList.remove('visible', 'dead');
    }
  });
  document.getElementById('wrong-num').textContent = wrongGuesses.length;
}

// ──────────────────────────────────────────────────────────────
// Wrong letters display
// ──────────────────────────────────────────────────────────────
function renderWrong() {
  const el = document.getElementById('wrong-letters');
  el.textContent = wrongGuesses.length
    ? 'Wrong: ' + wrongGuesses.join(' · ')
    : '';
}

// ──────────────────────────────────────────────────────────────
// Keyboard
// ──────────────────────────────────────────────────────────────
const ROWS = [
  { id: 'row1', keys: 'QWERTYUIOP'.split('') },
  { id: 'row2', keys: 'ASDFGHJKL'.split('')  },
  { id: 'row3', keys: 'ZXCVBNM'.split('')    }
];

function buildKeyboard() {
  ROWS.forEach(({ id, keys }) => {
    const row = document.getElementById(id);
    keys.forEach(k => {
      const btn = document.createElement('button');
      btn.textContent   = k;
      btn.dataset.key   = k;
      btn.className     = 'kb-key';
      btn.onclick       = () => guess(k);
      row.appendChild(btn);
    });
  });
}

function updateKeyboard() {
  document.querySelectorAll('.kb-key').forEach(btn => {
    const k = btn.dataset.key;
    if (guessedLetters.has(k)) {
      btn.disabled = true;
      // Determine if it was correct or wrong
      const isCorrect = chosenWord.replace(/[^A-Z]/g,'').includes(k);
      btn.classList.toggle('correct', isCorrect);
      btn.classList.toggle('wrong',   !isCorrect);
    }
  });
}

// ──────────────────────────────────────────────────────────────
// Core guess logic
// ──────────────────────────────────────────────────────────────
function guess(letter) {
  if (gameOver || guessedLetters.has(letter)) return;
  guessedLetters.add(letter);

  const wordLetters = new Set(chosenWord.replace(/[^A-Z]/g, '').split(''));
  const isCorrect   = wordLetters.has(letter);

  if (isCorrect) {
    score += 1;
  } else {
    wrongGuesses.push(letter);
  }

  renderWord();
  renderGallows();
  renderWrong();
  updateKeyboard();
  saveStats();
  renderStats();
  checkEndCondition();
}

function checkEndCondition() {
  const allRevealed = [...chosenWord].every(ch => !/[A-Z]/.test(ch) || guessedLetters.has(ch));
  const tooManyWrong = wrongGuesses.length >= MAX_WRONG;

  if (allRevealed) {
    gameOver = true;
    score += 10;
    streak += 1;
    saveStats();
    renderStats();
    markPlayedToday();
    document.getElementById('message').textContent = 'For the Alliance! (or Horde…)';
    document.getElementById('game-container').classList.add('state-won');
    document.removeEventListener('keydown', onKeyDown);
    setTimeout(() => showEndModal(true), 900);
  } else if (tooManyWrong) {
    gameOver = true;
    streak = 0;
    saveStats();
    renderStats();
    markPlayedToday();
    document.getElementById('message').textContent = `The hero has fallen! The word was "${chosenWord}"`;
    document.getElementById('game-container').classList.add('state-lost');
    document.removeEventListener('keydown', onKeyDown);
    setTimeout(() => showEndModal(false), 900);
  }
}

// ──────────────────────────────────────────────────────────────
// Physical keyboard
// ──────────────────────────────────────────────────────────────
function onKeyDown(e) {
  const letter = e.key.toUpperCase();
  if (/^[A-Z]$/.test(letter) && !gameOver) guess(letter);
}

// ──────────────────────────────────────────────────────────────
// Modals
// ──────────────────────────────────────────────────────────────
function openModal(id)  { document.getElementById(id).classList.add('open');    }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

function showEndModal(won) {
  const guessArr = [...guessedLetters];
  const wordSet  = new Set(chosenWord.replace(/[^A-Z]/g, '').split(''));

  const emojiLine = guessArr.map(l => wordSet.has(l) ? '🟩' : '🟥').join('');

  document.getElementById('end-title').textContent    = won ? '⚔ Victory! ⚔' : '💀 Defeated 💀';
  document.getElementById('end-message').textContent  = won
    ? `You uncovered "${chosenWord}" with ${wrongGuesses.length} wrong guess${wrongGuesses.length !== 1 ? 'es' : ''}!`
    : `The word was "${chosenWord}". Better luck tomorrow, champion.`;

  document.getElementById('share-emoji').textContent = emojiLine;

  const shareStr = [
    `🗡 Azerothian Guess 🗡`,
    `${won ? 'Won' : 'Lost'} · ${wrongGuesses.length}/${MAX_WRONG} wrong`,
    emojiLine,
    `https://i-am-t3x.github.io/Azerothian-Guess/`
  ].join('\n');

  document.getElementById('share-text').value = shareStr;

  const rune = won ? '✦' : '💀';
  document.getElementById('end-rune').textContent  = rune;
  document.getElementById('end-rune2').textContent = rune;

  openModal('modal-endgame');
}

// Copy to clipboard
document.getElementById('btn-copy').addEventListener('click', async () => {
  const text = document.getElementById('share-text').value;
  const confirm = document.getElementById('copy-confirm');
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Fallback
    const ta = document.getElementById('share-text');
    ta.select();
    document.execCommand('copy');
  }
  confirm.classList.add('show');
  setTimeout(() => confirm.classList.remove('show'), 2000);
});

// ──────────────────────────────────────────────────────────────
// Start game
// ──────────────────────────────────────────────────────────────
function startGame() {
  closeModal('modal-instructions');

  if (hasPlayedToday()) {
    document.getElementById('message').textContent = "You've already played today — come back at midnight!";
    gameOver = true;
    // Still render so they can see the word board
    renderWord();
    renderGallows();
    renderWrong();
    updateKeyboard();
    return;
  }

  renderWord();
  renderGallows();
  renderWrong();
  updateKeyboard();
  document.addEventListener('keydown', onKeyDown);
}

// ──────────────────────────────────────────────────────────────
// Init
// ──────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  chosenWord = getWordOfDay();
  loadStats();
  renderStats();
  buildKeyboard();

  // Wire up buttons
  document.getElementById('btn-start').addEventListener('click', startGame);

  // Show instructions on load
  openModal('modal-instructions');
});
