import { partyState } from "../state/partyState.js";
import {
    calculateMaxHitPoints,
    calculateArmorClass,
    calculateSavingThrows,
    getBaseAttackBonus,
    getMeleeAttackBonus,
    getRangedAttackBonus,
    getAbilityModifier
} from "../util/calculations.js";
import { createCharacter } from "../models/character.js";
import {
    generalColumns,
    combatColumns,
    saveColumns,
    abilityColumns
} from './columnDefinitions.js';

export function statisticsComponent() {
    return {
        // Reactive data
        activeTab: 'combat',
        characters: partyState.characters,

        // Placeholder sets (optional, used later)
        editableHpIds: new Set(),
        confirmingDeleteIds: new Set(),

        // Computed property for visible columns
        get columns() {
            let columns = [...generalColumns];
            if (this.activeTab === 'combat') {
                columns.push(...combatColumns);
            } else if (this.activeTab === 'saves') {
                columns.push(...saveColumns);
            } else if (this.activeTab === 'abilities') {
                columns.push(...abilityColumns);
            }
            return columns;
        },

        // Methods
        saveAll() {
            // In a real app, you'd likely sync state to localStorage or send it to a backend
            console.log('Saving characters:', this.characters);
            alert('Characters saved (placeholder)');
        },

        addCharacter() {
            const newChar = createCharacter('', 'fighter')
            this.characters.push(newChar);
        }
    };
}
