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
    "RHVzdHdhbGxvdy==", "TWFyc2g=", "QmFycmVucw==", "U3Rvb3JldGFsb24=", 
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

function decodeWords(encodedWords) {
    return encodedWords.map(word => atob(word));
}

const words = decodeWords(encodedWords);

// Helper functions to handle cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function getWordOfTheDay() {
    const startDate = new Date("2024-01-01"); // Starting date of your word list
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return words[diffDays % words.length].toUpperCase();
}

function hasPlayedToday() {
    const lastPlayedDate = getCookie('lastPlayedDate');
    const today = new Date().toLocaleDateString();
    return lastPlayedDate === today;
}

function savePlay() {
    const today = new Date().toLocaleDateString();
    setCookie('lastPlayedDate', today, 1);
}

function getScore() {
    return parseInt(getCookie('score')) || 0;
}

function setScore(newScore) {
    setCookie('score', newScore, 365);
    document.getElementById('score').textContent = `Score: ${newScore}`;
}

function getStreak() {
    return parseInt(getCookie('streak')) || 0;
}

function setStreak(newStreak) {
    setCookie('streak', newStreak, 365);
    document.getElementById('streak').textContent = `Streak: ${newStreak}`;
}

let chosenWord = getWordOfTheDay();
let displayedWord = "_".repeat(chosenWord.length).split('');
let wrongGuesses = [];
let maxWrongGuesses = 6;
let score = getScore();
let streak = getStreak();
let guesses = [];

const wordDisplay = document.getElementById('word-display');
const letters = document.getElementById('letters');
const message = document.getElementById('message');
const wrongGuessesDisplay = document.getElementById('wrong-guesses');
const hangmanParts = document.querySelectorAll('.hangman-part');

function displayWord() {
    wordDisplay.textContent = displayedWord.join(' ');
}

function updateWrongGuesses() {
    wrongGuessesDisplay.textContent = `Wrong guesses: ${wrongGuesses.join(', ')}`;
    hangmanParts.forEach((part, index) => {
        part.style.display = index < wrongGuesses.length ? 'block' : 'none';
    });
}

function checkGameStatus() {
    if (!displayedWord.includes('_')) {
        message.textContent = "Congratulations! You guessed the word!";
        document.removeEventListener('keydown', handleKeyPress);
        setScore(score + 10); // Award 10 points for winning
        setStreak(streak + 1); // Increase streak
        savePlay();
        showEndGameModal(true);
    } else if (wrongGuesses.length >= maxWrongGuesses) {
        message.textContent = `Game Over! The word was: ${chosenWord}`;
        document.removeEventListener('keydown', handleKeyPress);
        setStreak(0); // Reset streak
        savePlay();
        showEndGameModal(false);
    }
}

function handleGuess(letter) {
    guesses.push(letter);
    if (chosenWord.includes(letter)) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                displayedWord[i] = letter;
            }
        }
        setScore(score + 1); // Award 1 point for each correct letter
    } else {
        wrongGuesses.push(letter);
    }
    displayWord();
    updateWrongGuesses();
    checkGameStatus();
}

function handleKeyPress(event) {
    const letter = event.key.toUpperCase();
    if (/^[A-Z]$/.test(letter) && !message.textContent) {
        handleGuess(letter);
    }
}

function createLetterButtons() {
    const rows = [
        { id: 'row1', keys: 'QWERTYUIOP'.split('') },
        { id: 'row2', keys: 'ASDFGHJKL'.split('') },
        { id: 'row3', keys: 'ZXCVBNM'.split('') }
    ];

    rows.forEach(row => {
        const rowDiv = document.getElementById(row.id);
        row.keys.forEach(key => {
            let button = document.createElement('button');
            button.textContent = key;
            button.onclick = () => handleGuess(key);
            rowDiv.appendChild(button);
        });
    });
}

// Modal logic
const instructionsModal = document.getElementById('instructions-modal');
const closeButton = document.querySelector('.close-button');
const startGameButton = document.getElementById('start-game');
const endGameModal = document.getElementById('end-game-modal');
const endGameCloseButton = document.getElementById('end-game-close-button');
const endGameMessage = document.getElementById('end-game-message');
const endGameCopyPasta = document.getElementById('end-game-copy-pasta');
const copyToClipboardButton = document.getElementById('copy-to-clipboard');

function openModal(modal) {
    modal.style.display = 'block';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

closeButton.onclick = () => closeModal(instructionsModal);
startGameButton.onclick = () => {
    closeModal(instructionsModal);
    if (!hasPlayedToday()) {
        displayWord();
        createLetterButtons();
        updateWrongGuesses();
        setScore(score); // Display the current score
        setStreak(streak); // Display the current streak
        document.addEventListener('keydown', handleKeyPress);
    } else {
        message.textContent = "You have already played today! Come back tomorrow.";
    }
};

endGameCloseButton.onclick = () => closeModal(endGameModal);
copyToClipboardButton.onclick = () => {
    endGameCopyPasta.select();
    document.execCommand('copy');
};

function showEndGameModal(won) {
    endGameMessage.textContent = won ? "Congratulations! You guessed the word!" : `Game Over! The word was: ${chosenWord}`;
    endGameCopyPasta.value = generateCopyPasta(won);
    openModal(endGameModal);
}

function generateCopyPasta(won) {
    const result = guesses.map(letter => (chosenWord.includes(letter) ? '✅' : '❌')).join(' ');
    const link = "https://i-am-t3x.github.io/Azerothian-Guess/";
    return `Azerothian Guess: ${won ? "Won" : "Lost"}\n${result}\nPlay the game: ${link}`;
}

window.onload = () => openModal(instructionsModal);