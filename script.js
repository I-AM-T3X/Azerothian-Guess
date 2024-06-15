const words = [
    "Azeroth", "Kalimdor", "Eastern", "Plaguelands", "Pandaria", "Draenor", "Outland", "Northrend", 
    "Shadowlands", "Teldrassil", "Darnassus", "Orgrimmar", "Thunder", "Bluff", "Silvermoon", "Undercity", 
    "Stormwind", "Ironforge", "Gilneas", "Gnomeregan", "Exodar", "Ahn'Qiraj", "Ulduar", "Karazhan", 
    "Blackrock", "Molten", "Core", "Icecrown", "Naxxramas", "Zul'Gurub", "Zul'Aman", "Stratholme", 
    "Scholomance", "Dire", "Maul", "Wailing", "Caverns", "Deadmines", "Scarlet", "Monastery", "Blackwing", 
    "Lair", "Serpentshrine", "Cavern", "Tempest", "Keep", "Gruul's", "Magtheridon's", "Sunwell", "Plateau", 
    "Siege", "Orgrimmar", "Throne", "Thunder", "Firelands", "Dragon", "Soul", "Heart", "Fear", "Vale", 
    "Eternal", "Blossoms", "Shattrath", "Dalaran", "Uldum", "Vashj'ir", "Hyjal", "Deepholm", "Twilight", 
    "Highlands", "Jade", "Forest", "Valley", "Four", "Winds", "Krasarang", "Wilds", "Kun-Lai", "Summit", 
    "Townlong", "Steppes", "Dread", "Wastes", "Frostfire", "Ridge", "Shadowmoon", "Gorgrond", "Talador", 
    "Spires", "Arak", "Nagrand", "Tanaan", "Jungle", "Highmountain", "Stormheim", "Val'sharah", "Azsuna", 
    "Suramar", "Broken", "Shore", "Argus", "Antorus", "Burning", "Throne", "Kul", "Tiras", "Zandalar", 
    "Nazjatar", "Mechagon", "Bastion", "Maldraxxus", "Ardenweald", "Revendreth", "Korthia", "Zereth", 
    "Mortis", "Dragonblight", "Grizzly", "Hills", "Howling", "Fjord", "Sholazar", "Basin", "Borean", 
    "Tundra", "Icecrown", "Crystalsong", "Forest", "Storm", "Peaks", "Mulgore", "Elwynn", "Forest", "Dun", 
    "Morogh", "Durotar", "Tirisfal", "Glades", "Loch", "Modan", "Westfall", "Redridge", "Mountains", 
    "Stranglethorn", "Vale", "Silverpine", "Swamp", "Sorrows", "Wetlands", "Hillsbrad", "Foothills", 
    "Arathi", "Highlands", "Badlands", "Searing", "Gorge", "Burning", "Steppes", "Blasted", "Lands", 
    "Un'Goro", "Crater", "Silithus", "Felwood", "Feralas", "Desolace", "Thousand", "Needles", "Tanaris", 
    "Dustwallow", "Marsh", "Barrens", "Stonetalon", "Mountains", "Ashenvale", "Darkshore", "Azshara", 
    "Winterspring", "Moonglade", "Ghostlands", "Eversong", "Woods", "Hellfire", "Peninsula", "Zangarmarsh", 
    "Terokkar", "Netherspace", "Sunwell", "Silvermoon", "Blood", "Elf", "Night", "Tauren", "Orc", "Troll", 
    "Forsaken", "Human", "Dwarf", "Gnome", "Draenei", "Worgen", "Goblin", "Pandaren", "Lich", "King", 
    "Sylvanas", "Windrunner", "Illidan", "Stormrage", "Jaina", "Proudmoore", "Anduin", "Wrynn", "Genn", 
    "Greymane", "Baine", "Bloodhoof", "Lor'themar", "Theron", "Gelbin", "Mekkatorque", "Tyrande", 
    "Whisperwind", "Malfurion", "Saurfang", "Thrall", "Vol'jin", "Talanji", "Kael'thas", "Arthas", 
    "Menethil", "Garrosh", "Hellscream", "Kil'jaeden", "Archimonde", "Sargeras", "Mannoroth", "Xavius", 
    "Ragnaros", "Nefarian", "Onyxia", "Deathwing", "Ysera", "Alexstrasza", "Nozdormu", "Malygos", 
    "Neltharion", "Medivh", "Khadgar", "Gul'dan", "Ner'zhul", "Turalyon", "Alleria", "Windrunner", 
    "Vereesa", "Velen", "Wrathion", "Chromie", "Magni", "Bronzebeard", "Muradin", "Falstad", "Fenris", 
    "Kargath", "Bladefist", "Kilrogg", "Deadeye", "Teron'gor", "Grommash", "Hellscream", "Rexxar", 
    "Rokhan", "Lady", "Vashj", "Zekhan", "Gallywix", "Rezan", "Bwonsamdi", "Rastakhan", "Akunda", 
    "Jani", "Sethraliss", "Vol'kaal", "Zul", "Dazar", "Nazmir", "Voldun", "Zuldazar", "Drustvar", 
    "Stormsong", "Tiragarde", "Sound", "Kul Tiran", "Zandalari", "Bloodsail", "Buccaneers", "Ashvane", 
    "Overseer", "Freehold", "Jailer", "Sylvanas", "Bolvar", "Fordragon", "Anduin", "Shalamayne", 
    "Nathanos", "Blightcaller", "Helya", "Odyn", "Azerite", "Anima", "Heart", "Azeroth", "Faction", 
    "Horde", "Alliance", "Scourge", "Burning", "Legion", "Old", "Gods", "Titans", "First", "Ones", 
    "Vrykul", "Tol'vir", "Earthen", "Anub'arak", "Nerubians", "Harpies", "Mantid", "Yaungol", "Hozen", 
    "Jinyu", "Kvaldir", "Mogu", "Saurok", "Taunka", "Tuskarr", "Sethrak", "Tortollan", "Drust", 
    "Irontide", "Pirates", "Azeroth", "Guardian", "Tirisfal", "Nathrezim", "Dreadlords", "Scourge", 
    "Defias", "Brotherhood", "Sargeras", "Aggramar", "Eonar", "Aman'Thul", "Norgannon", "Khaz'goroth", 
    "Helya", "Odyn", "Valkyr", "Val'kyr", "Mimiron", "Freya", "Hodir"
];

// Function to get the word for today
function getWordOfTheDay() {
    const startDate = new Date("2024-01-01"); // Starting date of your word list
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return words[diffDays % words.length].toUpperCase();
}

// Function to check if the user has already played today
function hasPlayedToday() {
    const lastPlayedDate = localStorage.getItem('lastPlayedDate');
    const today = new Date().toLocaleDateString();
    return lastPlayedDate === today;
}

// Function to save today's play
function savePlay() {
    const today = new Date().toLocaleDateString();
    localStorage.setItem('lastPlayedDate', today);
}

// Function to get and set the score
function getScore() {
    return parseInt(localStorage.getItem('score')) || 0;
}

function setScore(newScore) {
    localStorage.setItem('score', newScore);
    document.getElementById('score').textContent = `Score: ${newScore}`;
}

// Function to get and set the streak
function getStreak() {
    return parseInt(localStorage.getItem('streak')) || 0;
}

function setStreak(newStreak) {
    localStorage.setItem('streak', newStreak);
    document.getElementById('streak').textContent = `Streak: ${newStreak}`;
}

let chosenWord = getWordOfTheDay();
let displayedWord = "_".repeat(chosenWord.length).split('');
let wrongGuesses = [];
let maxWrongGuesses = 6;
let score = getScore();
let streak = getStreak();

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
    } else if (wrongGuesses.length >= maxWrongGuesses) {
        message.textContent = `Game Over! The word was: ${chosenWord}`;
        document.removeEventListener('keydown', handleKeyPress);
        setStreak(0); // Reset streak
        savePlay();
    }
}

function handleGuess(letter) {
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

function openModal() {
    instructionsModal.style.display = 'block';
}

function closeModal() {
    instructionsModal.style.display = 'none';
}

closeButton.onclick = closeModal;
startGameButton.onclick = () => {
    closeModal();
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

window.onload = openModal;

// Debug mode logic
const debugPasswordInput = document.getElementById('debug-password');
const resetButton = document.getElementById('reset-button');

debugPasswordInput.addEventListener('input', function () {
    if (debugPasswordInput.value === 'yourDebugPassword') {
        debugPasswordInput.classList.add('visible');
        resetButton.classList.add('visible');
    }
});

resetButton.addEventListener('click', function () {
    localStorage.removeItem('lastPlayedDate');
    setScore(0);
    setStreak(0);
    location.reload();
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        debugPasswordInput.classList.toggle('visible');
    }
});
const words = [
    "Azeroth", "Kalimdor", "Eastern", "Plaguelands", "Pandaria", "Draenor", "Outland", "Northrend", 
    "Shadowlands", "Teldrassil", "Darnassus", "Orgrimmar", "Thunder", "Bluff", "Silvermoon", "Undercity", 
    "Stormwind", "Ironforge", "Gilneas", "Gnomeregan", "Exodar", "Ahn'Qiraj", "Ulduar", "Karazhan", 
    "Blackrock", "Molten", "Core", "Icecrown", "Naxxramas", "Zul'Gurub", "Zul'Aman", "Stratholme", 
    "Scholomance", "Dire", "Maul", "Wailing", "Caverns", "Deadmines", "Scarlet", "Monastery", "Blackwing", 
    "Lair", "Serpentshrine", "Cavern", "Tempest", "Keep", "Gruul's", "Magtheridon's", "Sunwell", "Plateau", 
    "Siege", "Orgrimmar", "Throne", "Thunder", "Firelands", "Dragon", "Soul", "Heart", "Fear", "Vale", 
    "Eternal", "Blossoms", "Shattrath", "Dalaran", "Uldum", "Vashj'ir", "Hyjal", "Deepholm", "Twilight", 
    "Highlands", "Jade", "Forest", "Valley", "Four", "Winds", "Krasarang", "Wilds", "Kun-Lai", "Summit", 
    "Townlong", "Steppes", "Dread", "Wastes", "Frostfire", "Ridge", "Shadowmoon", "Gorgrond", "Talador", 
    "Spires", "Arak", "Nagrand", "Tanaan", "Jungle", "Highmountain", "Stormheim", "Val'sharah", "Azsuna", 
    "Suramar", "Broken", "Shore", "Argus", "Antorus", "Burning", "Throne", "Kul", "Tiras", "Zandalar", 
    "Nazjatar", "Mechagon", "Bastion", "Maldraxxus", "Ardenweald", "Revendreth", "Korthia", "Zereth", 
    "Mortis", "Dragonblight", "Grizzly", "Hills", "Howling", "Fjord", "Sholazar", "Basin", "Borean", 
    "Tundra", "Icecrown", "Crystalsong", "Forest", "Storm", "Peaks", "Mulgore", "Elwynn", "Forest", "Dun", 
    "Morogh", "Durotar", "Tirisfal", "Glades", "Loch", "Modan", "Westfall", "Redridge", "Mountains", 
    "Stranglethorn", "Vale", "Silverpine", "Swamp", "Sorrows", "Wetlands", "Hillsbrad", "Foothills", 
    "Arathi", "Highlands", "Badlands", "Searing", "Gorge", "Burning", "Steppes", "Blasted", "Lands", 
    "Un'Goro", "Crater", "Silithus", "Felwood", "Feralas", "Desolace", "Thousand", "Needles", "Tanaris", 
    "Dustwallow", "Marsh", "Barrens", "Stonetalon", "Mountains", "Ashenvale", "Darkshore", "Azshara", 
    "Winterspring", "Moonglade", "Ghostlands", "Eversong", "Woods", "Hellfire", "Peninsula", "Zangarmarsh", 
    "Terokkar", "Netherspace", "Sunwell", "Silvermoon", "Blood", "Elf", "Night", "Tauren", "Orc", "Troll", 
    "Forsaken", "Human", "Dwarf", "Gnome", "Draenei", "Worgen", "Goblin", "Pandaren", "Lich", "King", 
    "Sylvanas", "Windrunner", "Illidan", "Stormrage", "Jaina", "Proudmoore", "Anduin", "Wrynn", "Genn", 
    "Greymane", "Baine", "Bloodhoof", "Lor'themar", "Theron", "Gelbin", "Mekkatorque", "Tyrande", 
    "Whisperwind", "Malfurion", "Saurfang", "Thrall", "Vol'jin", "Talanji", "Kael'thas", "Arthas", 
    "Menethil", "Garrosh", "Hellscream", "Kil'jaeden", "Archimonde", "Sargeras", "Mannoroth", "Xavius", 
    "Ragnaros", "Nefarian", "Onyxia", "Deathwing", "Ysera", "Alexstrasza", "Nozdormu", "Malygos", 
    "Neltharion", "Medivh", "Khadgar", "Gul'dan", "Ner'zhul", "Turalyon", "Alleria", "Windrunner", 
    "Vereesa", "Velen", "Wrathion", "Chromie", "Magni", "Bronzebeard", "Muradin", "Falstad", "Fenris", 
    "Kargath", "Bladefist", "Kilrogg", "Deadeye", "Teron'gor", "Grommash", "Hellscream", "Rexxar", 
    "Rokhan", "Lady", "Vashj", "Zekhan", "Gallywix", "Rezan", "Bwonsamdi", "Rastakhan", "Akunda", 
    "Jani", "Sethraliss", "Vol'kaal", "Zul", "Dazar", "Nazmir", "Voldun", "Zuldazar", "Drustvar", 
    "Stormsong", "Tiragarde", "Sound", "Kul Tiran", "Zandalari", "Bloodsail", "Buccaneers", "Ashvane", 
    "Overseer", "Freehold", "Jailer", "Sylvanas", "Bolvar", "Fordragon", "Anduin", "Shalamayne", 
    "Nathanos", "Blightcaller", "Helya", "Odyn", "Azerite", "Anima", "Heart", "Azeroth", "Faction", 
    "Horde", "Alliance", "Scourge", "Burning", "Legion", "Old", "Gods", "Titans", "First", "Ones", 
    "Vrykul", "Tol'vir", "Earthen", "Anub'arak", "Nerubians", "Harpies", "Mantid", "Yaungol", "Hozen", 
    "Jinyu", "Kvaldir", "Mogu", "Saurok", "Taunka", "Tuskarr", "Sethrak", "Tortollan", "Drust", 
    "Irontide", "Pirates", "Azeroth", "Guardian", "Tirisfal", "Nathrezim", "Dreadlords", "Scourge", 
    "Defias", "Brotherhood", "Sargeras", "Aggramar", "Eonar", "Aman'Thul", "Norgannon", "Khaz'goroth", 
    "Helya", "Odyn", "Valkyr", "Val'kyr", "Mimiron", "Freya", "Hodir"
];

// Function to get the word for today
function getWordOfTheDay() {
    const startDate = new Date("2024-01-01"); // Starting date of your word list
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return words[diffDays % words.length].toUpperCase();
}

// Function to check if the user has already played today
function hasPlayedToday() {
    const lastPlayedDate = localStorage.getItem('lastPlayedDate');
    const today = new Date().toLocaleDateString();
    return lastPlayedDate === today;
}

// Function to save today's play
function savePlay() {
    const today = new Date().toLocaleDateString();
    localStorage.setItem('lastPlayedDate', today);
}

// Function to get and set the score
function getScore() {
    return parseInt(localStorage.getItem('score')) || 0;
}

function setScore(newScore) {
    localStorage.setItem('score', newScore);
    document.getElementById('score').textContent = `Score: ${newScore}`;
}

// Function to get and set the streak
function getStreak() {
    return parseInt(localStorage.getItem('streak')) || 0;
}

function setStreak(newStreak) {
    localStorage.setItem('streak', newStreak);
    document.getElementById('streak').textContent = `Streak: ${newStreak}`;
}

let chosenWord = getWordOfTheDay();
let displayedWord = "_".repeat(chosenWord.length).split('');
let wrongGuesses = [];
let maxWrongGuesses = 6;
let score = getScore();
let streak = getStreak();

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
    } else if (wrongGuesses.length >= maxWrongGuesses) {
        message.textContent = `Game Over! The word was: ${chosenWord}`;
        document.removeEventListener('keydown', handleKeyPress);
        setStreak(0); // Reset streak
        savePlay();
    }
}

function handleGuess(letter) {
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

function openModal() {
    instructionsModal.style.display = 'block';
}

function closeModal() {
    instructionsModal.style.display = 'none';
}

closeButton.onclick = closeModal;
startGameButton.onclick = () => {
    closeModal();
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

window.onload = openModal;

// Debug mode logic
const debugPasswordInput = document.getElementById('debug-password');
const resetButton = document.getElementById('reset-button');

debugPasswordInput.addEventListener('input', function () {
    if (debugPasswordInput.value === '1eMSM3CkK73t') {
        debugPasswordInput.classList.add('visible');
        resetButton.classList.add('visible');
    }
});

resetButton.addEventListener('click', function () {
    localStorage.removeItem('lastPlayedDate');
    setScore(0);
    setStreak(0);
    location.reload();
});

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        debugPasswordInput.classList.toggle('visible');
    }
});
