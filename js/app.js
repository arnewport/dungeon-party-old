import Alpine from 'https://unpkg.com/alpinejs?module';
import { characterCard } from './components/characterCard.js';
import { characterClasses } from './state/lookupTables.js';
import { createCharacter } from './models/character.js';
import { partyState } from './state/partyState.js';

// default state
const defaultCharacter = createCharacter("Character Name", "fighter");
partyState.characters.push(defaultCharacter);

window.Alpine = Alpine;

// declaring global variables (required for AlpineJS)
window.defaultCharacter = defaultCharacter;
window.partyState = partyState
window.characterCard = characterCard;
window.characterClasses = characterClasses;

Alpine.start();
console.log('Alpine initialized');