# Azerothian Guess

Azerothian Guess is a World of Warcraft-themed hangman-style word guessing game. Guess iconic WoW terms — zones, characters, spells, raids, dungeons, lore, and more — one letter at a time before the hero falls.

Play it here: **https://i-am-t3x.github.io/Azerothian-Guess/**

---

## Features

- **Daily Mode** — One new word per day, selected from over 1,100 WoW terms. Resets at midnight. Your streak carries across days.
- **Endless Mode** — Play back-to-back rounds with a fresh random word each time. Build your run streak without any daily limit.
- **Separate Scores** — Daily and Endless scores are completely independent. Points earned in one mode never affect the other.
- **Massive Word List** — 1,187 words across 11 categories: Zones, Cities, Dungeons, Raids, Characters, Races, Artifacts, Factions, Spells, Lore, and Battlegrounds. Over 3 years of daily play before any word repeats.
- **Hints** — After 3 wrong guesses a hint becomes available, revealing the word's category and context for −5 points.
- **Fully Responsive** — Scales correctly on phones, tablets, desktops, and 4K monitors. The keyboard is always fully visible at the bottom of the screen. Long multi-word answers wrap by whole word, never mid-word, with font size calculated dynamically so the longest word always fits on one line.
- **Keyboard Support** — Guess letters by clicking the on-screen keyboard or typing on your physical keyboard.
- **Persistent Stats** — Scores and streaks are saved in your browser's `localStorage` and persist between sessions.
- **Share Results** — Copy your result as an emoji grid to share after each round.
- **GDPR Compliant** — No cookies. All data stays on your device in `localStorage` only. Nothing is sent to any server.

---

## How to Play

1. **Choose a mode** — Select **Daily** for one word per day or **Endless** to keep playing unlimited rounds.
2. **Guess letters** — Click the on-screen keys or type on your keyboard.
3. **Earn points** — +1 point per correct letter, +10 points for completing the word.
4. **Use a hint** — After 3 wrong guesses, a hint button appears. Using it costs 5 points and reveals the word's category and context.
5. **Win or lose** — You have 6 wrong guesses before the hero falls. The full word is revealed either way.
6. **Share** — Copy your emoji result from the end screen and share it anywhere.

---

## Scoring

| Action | Points |
|---|---|
| Correct letter guessed | +1 |
| Word completed (win) | +10 |
| Hint used | −5 |
| Wrong guess | 0 |

Daily and Endless scores are tracked separately and never combined.

---

## Word Categories

| Category | Count |
|---|---|
| Characters | 311 |
| Spells | 269 |
| Lore | 137 |
| Zones | 142 |
| Dungeons | 108 |
| Raids | 55 |
| Factions | 42 |
| Races | 50 |
| Artifacts | 33 |
| Cities | 26 |
| Battlegrounds | 14 |
| **Total** | **1,187** |

---

## File Structure

```
index.html   — Game layout and modals
words.json   — All words and hints, grouped by category (plain text, easy to edit)
script.js    — All game logic
styles.css   — All styling and responsive layout
```

The word list lives in `words.json` — a plain JSON file grouped by category. It is fetched at page load via `fetch()`. No build step required.

### Adding Words

Open `words.json` and add an entry to the relevant category array:

```json
"Dungeon": [
  { "word": "Deadmines", "hint": "Edwin VanCleef's Defias Brotherhood mine in Westfall" },
  { "word": "Your New Dungeon", "hint": "A short description of what it is" }
]
```

- `word` — plain text, any capitalisation (the game uppercases it internally)
- `hint` — shown when the player uses the hint button after 3 wrong guesses
- Category keys: `Zone`, `City`, `Dungeon`, `Raid`, `Character`, `Race`, `Artifact`, `Faction`, `Spell`, `Lore`, `Battleground`

---

## Privacy & Data Storage

All saved data (scores, streaks, daily play status, hint dismissed notice) is stored exclusively in your browser's `localStorage` under keys prefixed with `ag_`. No data is transmitted to any server, no cookies are set, and no third-party analytics are used. The game loads Google Fonts over the network; everything else runs entirely client-side.

To clear all saved data, open browser DevTools → Application → Local Storage and remove all keys beginning with `ag_`.

---

## Credits

Built with vanilla HTML, CSS, and JavaScript. WoW terms and lore belong to Blizzard Entertainment. This is a fan project with no affiliation with Blizzard.
