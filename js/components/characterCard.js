import {
    calculateMaxHitPoints,
    calculateArmorClass,
    calculateSavingThrows,
    getBaseAttackBonus,
    getMeleeAttackBonus,
    getRangedAttackBonus
} from "../util/calculations.js";
import { characterClasses } from '../state/lookupTables.js';

export function characterCard(character) {
    return {
        character,
        characterClasses,
        editing: false,

        get row2() {
            return {
                "HP": `${character.currentHitPoints} / ${calculateMaxHitPoints(character)}`,
                "Hit Dice": `d${character.rolledHitPoints}`,
                "Attack Bonus": getBaseAttackBonus(character),
                "Melee Attack": getMeleeAttackBonus(character),
                "Ranged Attack": getRangedAttackBonus(character),
                "Unused": "-"
            };
        },

        get row3() {
            const saves = calculateSavingThrows(character);
            return {
                "Armor Class": calculateArmorClass(character),
                "Death": saves.death,
                "Wands": saves.wands,
                "Paralysis": saves.paralysis,
                "Breath": saves.breath,
                "Spells": saves.spells
            };
        },

        get row4() {
            return {
                "STR": character.strength,
                "INT": character.intelligence,
                "WIS": character.wisdom,
                "DEX": character.dexterity,
                "CON": character.constitution,
                "CHA": character.charisma
            };
        },

        activate() { character.active = true },
        deactivate() { character.active = false },
        save() { this.editing = false }
    };
}
