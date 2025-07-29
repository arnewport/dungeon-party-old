import {
    getAbilityModifier,
    calculateMaxHitPoints,
    calculateArmorClass,
    calculateSavingThrows,
    getBaseAttackBonus,
    getMeleeAttackBonus,
    getRangedAttackBonus
} from "../util/calculations.js";
import { characterClasses } from '../state/lookupTables.js';

export function characterCard(character) {
    const isNotNegative = (value) => {
        if (value > -1) {
            return `+${value}`
        }
    }

    return {
        character,
        characterClasses,
        editing: false,


        get row2() {
            return {
                "HP": `${character.currentHitPoints} / ${calculateMaxHitPoints(character)}`,
                "Attack Bonus": isNotNegative(getBaseAttackBonus(character)),
                "Melee Attack": isNotNegative(getMeleeAttackBonus(character)),
                "Ranged Attack": isNotNegative(getRangedAttackBonus(character)),
            };
        },

        get row3() {
            const saves = calculateSavingThrows(character);
            return {
                "Armor Class": calculateArmorClass(character),
                "Death Save": saves.death.total,
                "Wands Save": saves.wands.total,
                "Paralysis Save": saves.paralysis.total,
                "Breath Save": saves.breath.total,
                "Spells Save": saves.spells.total
            };
        },

        get row4() {
            return {
                "Strength": `${character.strength} (${isNotNegative(getAbilityModifier(character.strength))})`,
                "Intelligence": `${character.intelligence} (${isNotNegative(getAbilityModifier(character.intelligence))})`,
                "Wisdom": `${character.wisdom} (${isNotNegative(getAbilityModifier(character.wisdom))})`,
                "Dexterity": `${character.dexterity} (${isNotNegative(getAbilityModifier(character.dexterity))})`,
                "Constitution": `${character.constitution} (${isNotNegative(getAbilityModifier(character.constitution))})`,
                "Charisma": `${character.charisma} (${isNotNegative(getAbilityModifier(character.charisma))})`
            };
        },

        activate() { character.active = true },
        deactivate() { character.active = false },
        // TODO: add validation to saving
        save() { this.editing = false }
    };
}
