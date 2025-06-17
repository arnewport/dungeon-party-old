## README

- This is a side project I've been developing off-and-on
- I kept ignoring it because work (and then job hunting) things would take up all my time
- Now, I am in the job hunting phase
- I dislike the "oh wow, look at all of those GitHub commits" approach to GitHub, but hey, you have to play the game
- I was in the middle of converting my work from vanilla HTML / CSS / JS + Bootstrap to AlpineJS + Bootstrap
- It's been a while since I worked on this, so I'm "saving my progress" with the first commit, then I'm wiping several sections and going back to the drawing board
- My goal is to blitz out a simple, functional CRUD app that I'll be using for my biweekly D&D games + a quick, simple, complete application that I can demonstrate during the various kinds of job interviews I may have
- A more professional README is coming later

## DESIGN

**I asked ChatGPT to summarize the user requirements I defined**

> It's been a couple months since I worked on this. Can you review the requirements I set for this project? What I needed as a user, not the technologies I planned on using

## 🎯 **Core Purpose**

You’re building a **simple, client-side dice roller** for managing D&D-style characters (specifically for *Old School Essentials*) that lets you:

- Maintain a **party of characters**
- Track each character's **stats and weapons**
- Quickly **roll attacks and damage** with modifiers
- **Edit** characters and weapons easily
- **Import/export** party data as JSON

------

## 🧑‍💻 **User Goals**

You want to:

1. **Add a new character** quickly
   - Starts with placeholder/default values
   - No need to enter full details upfront
2. **Edit character and weapon information** easily
   - All input fields should be **always visible** (no toggled editing states)
   - Each character can have up to **10 weapons**
   - Each character has **one active weapon**
3. **Roll dice with situational bonuses**
   - Situational bonuses apply to **attack rolls only**, not damage
   - Bonuses are per-character and can be modified
4. **Get quick visual feedback**
   - Dice rolls should clearly display:
     - Roll results
     - Modifiers
     - Total
5. **Manage multiple characters and weapons**
   - Add/remove characters
   - Add/remove weapons
   - Change a character’s active weapon
6. **Save/load party data**
   - JSON-based export/import
   - Persistence is important, but not the first feature you’re building

------

## 🧠 **Constraints and Assumptions**

- No validation restrictions between class and weapon
- No critical hits/fumbles (basic rolls only)
- Max of 10 weapons per character (enforced in UI)
- Rolls don’t need to be logged—just shown in the moment
- You’ll do **validation and polish later**, but want the core interactivity and rolling features working first

------

## 📐 **Visual/UX Expectations**

- Layout is modular and straightforward:
  - Characters are displayed as horizontal sections
  - Weapons are listed vertically under each character
- Each character card has:
  - Name, class, ability scores
  - Weapon list with option to choose active weapon
  - Buttons for rolling attack and damage
- Errors (when validation is added) should be shown:
  - In a list at the top of the page with anchor links
  - Inline above the relevant input field

------

## ✅ **Development Phases (Your Preferred Order)**

1. **Rolling** – Get core dice roll functions working
2. **Interactivity** – Add/remove/edit characters and weapons
3. **Persistence** – Import/export JSON party data
4. **Validation** – Enforce constraints and show errors
5. **UI Polish** – Style refinements and minor enhancements