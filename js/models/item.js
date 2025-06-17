/**
 * @typedef {Object} Item
 * @property {string} id
 * @property {string} name
 * @property {string} type
 * @property {string=} url
 * @property {{ type: string, id: string }} location
 * @property {("melee"|"ranged")[]=} weaponType
 * @property {number=} magicBonus
 * @property {number=} damageDie
 * @property {string=} armorType
 * @property {number=} armorBonus
 * @property {number=} savingThrowBonus
 */

/**
 * Creates a new Item.
 * @param {string} name
 * @param {string} type
 * @param {{ type: string, id: string }} location
 * @returns {Item}
 */
export function createItem(name, type, location) {
    return {
        id: crypto.randomUUID(),
        name,
        type,
        location,
        url: undefined
        // additional fields can be added manually after creation
    };
}
