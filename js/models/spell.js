/**
 * @typedef {Object} Spell
 * @property {string} name
 * @property {number} level
 * @property {"arcane"|"divine"} type
 */

/**
 * @typedef {Object} MemorizedSpell
 * @property {string} name
 * @property {number} level
 * @property {boolean} cast
 */

/**
 * Creates a Spell.
 * @param {string} name
 * @param {number} level
 * @param {"arcane"|"divine"} type
 * @returns {Spell}
 */
export function createSpell(name, level, type) {
    return { name, level, type };
}

/**
 * Creates a MemorizedSpell.
 * @param {string} name
 * @param {number} level
 * @returns {MemorizedSpell}
 */
export function createMemorizedSpell(name, level) {
    return { name, level, cast: false };
}
