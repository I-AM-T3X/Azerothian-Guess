const encodedWords = [
    "QXplcm90aA==", "S2FsaW1kb3I=", "RWFzdGVybg==", "UGxhZ3VlbGFuZHM=", "UGFuZGFyaWE=", 
    "RHJhZW5vcg==", "T3V0bGFuZA==", "Tm9ydGhyZW5k", "U2hhZG93bGFuZHM=", "VGVsZHJhc3NpbA==", 
    "RGFybmFzc3Vz", "T3JncmltbWFy", "VGh1bmRlcg==", "Qmx1ZmY=", "U2lsdmVybW9vbg==", 
    "VW5kZXJjaXR5", "U3Rvcm13aW5k", "SXJvbmZvcmdl", "R2lsbmVhcw==", "R25vbWVyZWdhbg==", 
    "RXhvZGFy", "QWhuJ1FpcmFq", "VWxkdWFy", "S2FyYXpoYW4=", "QmxhY2tyb2Nr", 
    "TW9sdGVu", "Q29yZQ==", "SWNlY3Jvd24=", "TmF4eHJhbWFz", "WnVsJ0d1cnVi", 
    "WnVsJ0FtYW4=", "U3RyYXRob2xtZQ==", "U2Nob2xvbWFuY2U=", "RGlyZQ==", "TWF1bA==", 
    "V2FpbGluZw==", "Q2F2ZXJucw==", "RGVhZG1pbmVz", "U2NhcmxldA==", "TW9uYXN0ZXJ5", 
    "QmxhY2t3aW5n", "TGFpcg==", "U2VycGVudHNocmluZQ==", "Q2F2ZXJu", "VGVtcGVzdA==", 
    "S2VlcA==", "R3J1dWwncw==", "TWFndGhlcmlkb24n", "U3Vud2VsbA==", "UGxhdGVhdQ==", 
    "U2llZ2U=", "T3JncmltbWFy", "VGhyb25l", "VGh1bmRlcg==", "RmlyZWxhbmRz", "RHJhZ29u", 
    "U291bA==", "SGVhcnQ=", "RmVhcg==", "VmFsZQ==", "RXRlcm5hbA==", "Qmxvc3NvbXM=", 
    "U2hhdHRyYXRo", "RGFsYXJhbg==", "VWxkdW0=", "VmFzaicncg==", "SHlqYWw=", 
    "RGVlcGhvbG0=", "VHdpbGlnaHQ=", "SGlnaGxhbmRz", "SmFkZQ==", "Rm9yZXN0", 
    "VmFsbGV5", "Rm91cg==", "V2luZHM=", "S3Jhc2FyYW5n", "V2lsZHM=", "S3VuLUxhaQ==", 
    "U3VtbWl0", "VG93bmxvbmc=", "U3RlcHBlcw==", "RHJlYWQ=", "V2FzdGVz", "RnJvc3RmaXJl", 
    "UmlkZ2U=", "U2hhZG93bW9vbg==", "R29yZ3JvbmQ=", "VGFsYWRvcg==", "U3BpcmVz", 
    "QXJhaw==", "TmFncmFuZA==", "VGFuYWFu", "SnVuZ2xl", "SGlnaG1vdW50YWlu", 
    "U3Rvcm1oZWlt", "VmFsJ3NoYXJhaA==", "QXpzdW5h", "U3VyYW1hcg==", "QnJva2Vu", 
    "U2hvcmU=", "QXJndXM=", "QW50b3J1cw==", "QnVybmluZw==", "VGhyb25l", "S3Vs", 
    "VGlyYXM=", "WmFuZGFsYXI=", "TmF6amF0YXI=", "TWVjaGFnb24=", "QmFzdGlvbg==", 
    "TWFsZHJheHh1cw==", "QXJkZW53ZWFsZA==", "UmV2ZW5kcmV0aA==", "S29ydGhpYQ==", 
    "WmVyZXRo", "TW9ydGlz", "RHJhZ29uYmxpZ2h0", "R3JpenpseQ==", "SGlsbHM=", 
    "SG93bGluZw==", "RmpvcmQ=", "U2hvbGF6YXI=", "QmFzaW4=", "Qm9yZWFu", 
    "VHVuZHJh", "SWNlY3Jvd24=", "Q3J5c3RhbHNvbmcv", "Rm9yZXN0", "U3Rvcm0=", 
    "UGVha3M=", "TXVsZ29yZQ==", "RWx3eW5u", "Rm9yZXN0", "RHVu", "TW9yb2do", 
    "RHVyb3Rhcg==", "VGlyaXNmYWw=", "R2xhZGVz", "TG9jaA==", "TW9kYW4=", 
    "V2VzdGZhbGw=", "UmVkcmVkZ2U=", "TW91bnRhaW5z", "U3RyYW5nbGV0aG9ybg==", 
    "VmFsZQ==", "U2lsdmVycGluZQ==", "U3dhbXA=", "U29ycm93cw==", "V2V0bGFuZHM=", 
    "SGlsbHNicmFk", "Rm9vdGhpbGxz", "QXJhdGhp", "SGlnaGxhbmRz", "QmFkbGFuZHM=", 
    "U2VhcmluZw==", "R29yZ2U=", "QnVybmluZw==", "U3RlcHBlcw==", "Qmxhc3RlZA==", 
    "TGFuZHM=", "VW5ncm8=", "Q3JhdGVy", "U2lsaXRodXM=", "RmVsd29vZA==", 
    "RmVyYWxhcw==", "RGVzb2xhY2U=", "VGhvdXNhbmQ=", "TmVlZGxlcw==", "VGFuYXJpcw==", 
    "RHVzdHdhbGxvdy==", "TWFyc2g=", "QmFycmVucw==", "U3Rvcm13aW5k",
    "TW91bnRhaW5z", "QXNoZW52YWxl", "RGFya3Nob3Jl", "QXpzaGFyYQ==", "V2ludGVyc3ByaW5n", 
    "TW9vbmdsYWRl", "R2hvc3RsYW5kcw==", "RXZlcnNvbmc=", "V29vZHM=", "SGVsbGZpcmU=", 
    "UGVuaW5zdWxh", "WmFuZ2FybWFyc2g=", "VGVyb2trYXI=", "TmV0aGVyc3BhY2U=", 
    "U3Vud2VsbA==", "U2lsdmVybW9vbg==", "Qmxvb2Q=", "RWxm", "TmlnaHQ=", 
    "VGF1cmVu", "T3Jj", "VHJvbGw=", "Rm9yc2FrZW4=", "SHVtYW4=", "RHdhcmY=", 
    "R25vbWU=", "RHJhZW5laQ==", "V29yZ2Vu", "R29ibGlu", "UGFuZGFyZW4=", 
    "TGljaA==", "S2luZw==", "U3lsdmFuYXM=", "V2luZHJ1bm5lcg==", "SWxsaWRhbg==", 
    "U3Rvcm1yYWdl", "SmFpbmE=", "UHJvdWRtb29yZQ==", "QW5kdWlu", "V3J5bm4=", 
    "R2Vubg==", "R3JleW1hbmU=", "QmFpbmU=", "Qmxvb2Rob29m", "TG9yJ3RoZW1hcg==", 
    "VGhlcm9u", "R2VsYmlu", "TWVra2F0b3JxdWU=", "VHlyYW5kZQ==", "V2hpc3BlcndpbmQ=", 
    "TWFsZnVyaW9u", "U2F1cmZhbmc=", "VGhyYWxs", "Vm9sJ3ppbg==", "VGFsYW5qaQ==", 
    "S2FlbCcn", "QXJ0aGFz", "TWVuZXRobw==", "R2Fycm9zaA==", "SGVsbHNjcmVhbQ==", 
    "S2lsJ2phZWRlbg==", "QXJjaGltb25kZQ==", "U2FyZ2VyYXM=", "TWFubm9yb3Ro", 
    "WGF2aXVz", "UmFnbmFyb3M=", "TmVmYXJpYW4=", "T255eGlh", "RGVhdGh3aW5n", 
    "WXNlcmE=", "QWxleHN0cmFzemE=", "Tm96ZG9ybXU=", "TWFseWdvcw==", "TmVsdGhhcmlvbg==", 
    "TWVkaXZo", "S2hhZGdhcg==", "R3VsJ2Rhbg==", "TmVyJ3podWw=", "VHVyYWx5b24=", 
    "QWxsZXJpYQ==", "V2luZHJ1bm5lcg==", "VmVyZWVzYQ==", "VmVsZW4=", "V3JhdGhpb24=", 
    "Q2hyb21pZQ==", "TWFnbmk=", "QnJvbnplYmVhcmQ=", "TXVyYWRpbg==", "RmFsc3RhZA==", 
    "RmVucmlz", "S2FyZ2F0aA==", "QmxhZGVmaXN0", "S2lscm9nZw==", "RGVhZGV5ZQ==", 
    "VGVyb24nZ29y", "R3JvbW1hc2g=", "SGVsbHNjcmVhbQ==", "UmV4eGFy", "Um9raGFu", 
    "TGFkeQ==", "VmFzaGo=", "WmVraGFu", "R2FsbHl3aXg=", "UmV6YW4=", 
    "QndvbnNhbWRp", "UmFzdGFraGFu", "QWt1bmRh", "SmFuaQ==", "U2V0aHJhbGlzcw==", 
    "Vm9sJ3thYWw=", "WnVs", "RGF6YXI=", "TmF6bWly", "Vm9sZHVu", 
    "WnVsZGF6YXI=", "RHJ1c3R2YXI=", "U3Rvcm1zb25n", "VGlyYWdhcmRl", 
    "U291bmQ=", "S3VsIFRpcmFu", "WmFuZGFsYXJp", "Qmxvb2RzYWls", 
    "QnVjY2FuZWVycw==", "QXNodmFuZQ==", "T3ZlcnNlZXI=", "RnJlZWhvbGQ=", 
    "SmFpbGVy", "U3lsdmFuYXM=", "Qm9sdmFy", "Rm9yZHJhZ29u", "QW5kdWlu", 
    "U2hhbGFtYXluZQ==", "TmF0aGFub3M=", "QmxpZ2h0Y2FsbGVy", "SGVseWE=", 
    "T2R5bg==", "QXplcml0ZQ==", "QW5pbWE=", "SGVhcnQ=", "QXplcm90aA==", 
    "RmFjdGlvbg==", "SG9yZGU=", "QWxsaw==", "U2NvdXJnZQ==", "QnVybmluZw==", 
    "TGVnaW9u", "T2xk", "R29kcw==", "VGl0YW5z", "Rmlyc3Q=", "T25lcw==", 
    "VnJ5a3Vs", "VG9sJ3Zpcg==", "RWFydGhlbg==", "QW51YidBUmFr", "TmVydWJpYW5z", 
    "SGFycGllcw==", "TWFudGlk", "WWF1bmdvbA==", "SG96ZW4=", "SmlueQ==", 
    "S3ZhbGRpcg==", "TW9ndQ==", "U2F1cm9r", "VGF1bmth", "VHVza2Fy", 
    "U2V0aHJhaw==", "VG9ydG9sbGFu", "RHJ1c3Q=", "SXJvbnRpZGU=", "UGlyYXRlcw==", 
    "QXplcm90aA==", "R3VhcmRpYW4=", "VGlyaXNmYWw=", "TmF0aHJleiZpbQ==", 
    "RHJlYWRsb3Jk", "U2NvdXJnZQ==", "RGVmaWFz", "QnJvdGhlcmhvb2Q=", 
    "U2FyZ2VyYXM=", "QWdncmFtYXI=", "RW9uYXI=", "QW1hbidUaHVs", "Tm9yZ2Fubm9u", 
    "S2hhemcmZ290aA==", "SGVseWE=", "T2R5bg==", "VmFsa3ly", "VmFsJ3t5cg==", 
    "TWltaXJvbg==", "RnJleWE=", "SG9kaXI="
];

function decodeWords(encoded) {
  return encoded.map(w => atob(w));
}
const words = decodeWords(encodedWords);

// ── Cookie helpers ──────────────────────────────────────────
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 864e5);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}
function getCookie(name) {
  const eq = name + '=';
  for (let c of document.cookie.split(';')) {
    c = c.trim();
    if (c.startsWith(eq)) return c.slice(eq.length);
  }
  return null;
}

// ── Game state ──────────────────────────────────────────────
function getWordOfTheDay() {
  const start   = new Date('2024-01-01');
  const today   = new Date();
  const diffDays = Math.floor(Math.abs(today - start) / 864e5);
  return words[diffDays % words.length].toUpperCase();
}

function hasPlayedToday() {
  return getCookie('lastPlayedDate') === new Date().toLocaleDateString();
}
function savePlay() {
  setCookie('lastPlayedDate', new Date().toLocaleDateString(), 1);
}

let score  = parseInt(getCookie('score'))  || 0;
let streak = parseInt(getCookie('streak')) || 0;

function saveScore(n)  { score = n;  setCookie('score',  n, 365); updateStatDisplay(); }
function saveStreak(n) { streak = n; setCookie('streak', n, 365); updateStatDisplay(); }

function updateStatDisplay() {
  document.getElementById('score-val').textContent  = score;
  document.getElementById('streak-val').textContent = streak;
}

const chosenWord   = getWordOfTheDay();
let displayedWord  = Array(chosenWord.length).fill('_');
let wrongGuesses   = [];
let guessedLetters = [];
const MAX_WRONG    = 6;
let gameOver       = false;

// ── SVG hangman parts ───────────────────────────────────────
const svgParts = [
  document.getElementById('svg-rope'),
  document.getElementById('svg-head'),
  document.getElementById('svg-body'),
  document.getElementById('svg-left-arm'),
  document.getElementById('svg-right-arm'),
  document.getElementById('svg-left-leg'),
  document.getElementById('svg-right-leg'),
];

function updateHangman() {
  svgParts.forEach((el, i) => {
    if (!el) return;
    el.style.display = i < wrongGuesses.length ? '' : 'none';
    if (i < wrongGuesses.length && el.style.display !== 'none') {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.4s ease';
      requestAnimationFrame(() => { el.style.opacity = '1'; });
    }
  });
  // Show X eyes only when game lost
  const eyes = document.getElementById('svg-eyes');
  if (eyes) eyes.style.display = wrongGuesses.length >= MAX_WRONG ? '' : 'none';
}

// ── Word display ────────────────────────────────────────────
function renderWord(revealIdx = null) {
  const container = document.getElementById('word-display');
  container.innerHTML = '';
  displayedWord.forEach((char, i) => {
    const slot = document.createElement('div');
    slot.className = 'letter-slot';

    const charEl = document.createElement('div');
    charEl.className = 'letter-char';
    charEl.textContent = char !== '_' ? char : '';
    if (i === revealIdx || (revealIdx === 'all' && char !== '_')) {
      charEl.classList.add('reveal');
    }

    const line = document.createElement('div');
    line.className = 'letter-line';

    slot.appendChild(charEl);
    slot.appendChild(line);
    container.appendChild(slot);
  });
}

// ── Wrong guesses display ───────────────────────────────────
function renderWrongLetters() {
  const container = document.getElementById('wrong-letters');
  container.innerHTML = '';
  wrongGuesses.forEach(letter => {
    const span = document.createElement('span');
    span.className = 'wrong-letter';
    span.textContent = letter;
    container.appendChild(span);
  });
}

// ── Keyboard ────────────────────────────────────────────────
const keyRefs = {};

function createKeyboard() {
  const rows = [
    { id: 'row1', keys: 'QWERTYUIOP' },
    { id: 'row2', keys: 'ASDFGHJKL' },
    { id: 'row3', keys: 'ZXCVBNM' },
  ];
  rows.forEach(({ id, keys }) => {
    const rowEl = document.getElementById(id);
    [...keys].forEach(key => {
      const btn = document.createElement('button');
      btn.textContent = key;
      btn.className = 'key-btn';
      btn.dataset.key = key;
      btn.onclick = () => handleGuess(key);
      rowEl.appendChild(btn);
      keyRefs[key] = btn;
    });
  });
}

function markKey(letter, correct) {
  const btn = keyRefs[letter];
  if (!btn) return;
  btn.classList.add(correct ? 'correct' : 'wrong');
  btn.disabled = true;
}

// ── Guess logic ─────────────────────────────────────────────
function handleGuess(letter) {
  if (gameOver || guessedLetters.includes(letter)) return;
  guessedLetters.push(letter);

  if (chosenWord.includes(letter)) {
    const revealedIndices = [];
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === letter) {
        displayedWord[i] = letter;
        revealedIndices.push(i);
      }
    }
    saveScore(score + revealedIndices.length);
    renderWord(null); // render all; animate individually below
    revealedIndices.forEach((idx, delay) => {
      setTimeout(() => {
        const slots = document.getElementById('word-display').children;
        if (slots[idx]) {
          slots[idx].querySelector('.letter-char').classList.add('reveal');
        }
      }, delay * 80);
    });
    markKey(letter, true);
  } else {
    wrongGuesses.push(letter);
    markKey(letter, false);
    updateHangman();
    renderWrongLetters();
    // Shake the hangman section on wrong guess
    const section = document.getElementById('hangman-section');
    section.style.animation = 'none';
    section.offsetHeight; // reflow
    section.style.animation = 'shake 0.3s ease';
  }

  checkGameStatus();
}

// Add shake animation dynamically
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    25%      { transform: translateX(-5px); }
    75%      { transform: translateX(5px); }
  }
`;
document.head.appendChild(shakeStyle);

function checkGameStatus() {
  const msgEl = document.getElementById('message');

  if (!displayedWord.includes('_')) {
    gameOver = true;
    msgEl.textContent = '✦ The word has been revealed! ✦';
    msgEl.className = 'win';
    saveScore(score + 10);
    saveStreak(streak + 1);
    savePlay();
    disableAllKeys();
    document.removeEventListener('keydown', handleKeyPress);
    setTimeout(() => showEndModal(true), 900);
  } else if (wrongGuesses.length >= MAX_WRONG) {
    gameOver = true;
    // Reveal full word with animation
    displayedWord = [...chosenWord];
    renderWord('all');
    msgEl.textContent = `The word was: ${chosenWord}`;
    msgEl.className = 'lose';
    saveStreak(0);
    savePlay();
    disableAllKeys();
    document.removeEventListener('keydown', handleKeyPress);
    setTimeout(() => showEndModal(false), 1200);
  }
}

function disableAllKeys() {
  Object.values(keyRefs).forEach(btn => { btn.disabled = true; });
}

// ── Keyboard input ──────────────────────────────────────────
function handleKeyPress(e) {
  const letter = e.key.toUpperCase();
  if (/^[A-Z]$/.test(letter)) handleGuess(letter);
}

// ── Modals ──────────────────────────────────────────────────
function openModal(id) {
  const el = document.getElementById(id);
  el.classList.add('open');
  el.style.display = 'flex'; // fallback
}
function closeModal(id) {
  const el = document.getElementById(id);
  el.classList.remove('open');
  el.style.display = 'none';
}

function showEndModal(won) {
  const banner  = document.getElementById('result-banner');
  const title   = document.getElementById('end-game-title');
  const msg     = document.getElementById('end-game-message');
  const pasta   = document.getElementById('end-game-copy-pasta');

  banner.textContent  = won ? '🏆' : '💀';
  title.textContent   = won ? 'Victory!' : 'Defeated';
  msg.textContent     = won
    ? `You uncovered "${chosenWord}" and earned your place in Azerothian legend!`
    : `The shadows consumed you. The word was "${chosenWord}".`;
  pasta.value = generateShareText(won);
  openModal('end-game-modal');
}

function generateShareText(won) {
  const result = guessedLetters
    .map(l => (chosenWord.includes(l) ? '🟩' : '🟥'))
    .join('');
  const wrongCount = wrongGuesses.length;
  const link = 'https://i-am-t3x.github.io/Azerothian-Guess/';
  return `⚔️ Azerothian Guess — ${won ? 'Victory' : 'Defeated'}\n${result}\nWrong guesses: ${wrongCount}/${MAX_WRONG}\nStreak: ${streak} 🔥\nPlay: ${link}`;
}

// ── Init ────────────────────────────────────────────────────
function startGame() {
  closeModal('instructions-modal');

  if (hasPlayedToday()) {
    const msgEl = document.getElementById('message');
    msgEl.textContent = 'You have already ventured today. Return at dawn.';
    msgEl.className = '';
    disableAllKeys();
    return;
  }

  renderWord();
  updateHangman();
  updateStatDisplay();
  document.addEventListener('keydown', handleKeyPress);
}

// Wire up buttons
document.getElementById('inst-close').onclick    = () => closeModal('instructions-modal');
document.getElementById('start-game').onclick    = startGame;
document.getElementById('end-game-close').onclick  = () => closeModal('end-game-modal');
document.getElementById('end-game-close2').onclick = () => closeModal('end-game-modal');

document.getElementById('copy-to-clipboard').onclick = () => {
  const pasta = document.getElementById('end-game-copy-pasta');
  pasta.select();
  try {
    navigator.clipboard.writeText(pasta.value).catch(() => document.execCommand('copy'));
  } catch {
    document.execCommand('copy');
  }
  document.getElementById('copy-to-clipboard').textContent = 'Copied!';
  setTimeout(() => {
    document.getElementById('copy-to-clipboard').textContent = 'Copy Result';
  }, 2000);
};

// Create keyboard on load
createKeyboard();
updateStatDisplay();

// Show instructions on load
window.onload = () => {
  openModal('instructions-modal');
};
