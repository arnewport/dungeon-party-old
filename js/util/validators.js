import { getSpellSlots } from "./calculations.js";

/**
 * Checks if a character can carry another item (max 10).
 * @param {Character} character
 * @returns {boolean}
 */
export function canAddItemToCharacter(character) {
    return character.items.length < 10;
}

/**
 * Checks if Limbo has room for another item (max 100).
 * @param {Item[]} limbo
 * @returns {boolean}
 */
export function canAddItemToLimbo(limbo) {
    return limbo.length < 100;
}

/**
 * Checks if Storage has room for another item (max 1000).
 * @param {Item[]} storage
 * @returns {boolean}
 */
export function canAddItemToStorage(storage) {
    return storage.length < 1000;
}

/**
 * Validates equipped item limits by type.
 * @param {Item[]} equippedItems
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateEquippedItems(equippedItems) {
    const counts = {
        armor: 0,
        shield: 0,
        jewelry: 0,
        weapon: 0
    };

    for (const item of equippedItems) {
        if (counts.hasOwnProperty(item.type)) {
            counts[item.type]++;
        }
    }

    const errors = [];
    if (counts.armor > 1) errors.push("Too many armors equipped");
    if (counts.shield > 1) errors.push("Too many shields equipped");
    if (counts.jewelry > 3) errors.push("Too many jewelry items equipped");
    if (counts.weapon > 5) errors.push("Too many weapons equipped");

    return {
        valid: errors.length === 0,
        errors
    };
}

/**
 * Checks if a character can add another spell of a given level.
 * @param {Character} character
 * @param {number} level
 * @param {number} currentCount
 * @returns {boolean}
 */
export function canAddSpellOfLevel(character, level, currentCount) {
    const slots = getSpellSlots(character);
    const allowed = slots[level] || 0;
    return currentCount < allowed;
}
