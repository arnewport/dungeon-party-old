import Alpine from 'alpinejs';
import { characterClasses } from './state/lookupTables.js';

window.Alpine = Alpine;

window.characterClasses = characterClasses;

Alpine.start();