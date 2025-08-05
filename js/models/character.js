/**
 * @typedef {Object} Character
 * @property {string} id
 * @property {string} name
 * @property {string} class
 * @property {number} level
 * @property {string} alignment
 * @property {number} currentHitPoints
 * @property {number} rolledHitPoints
 * @property {number} strength
 * @property {number} intelligence
 * @property {number} wisdom
 * @property {number} dexterity
 * @property {number} constitution
 * @property {number} charisma
 * @property {number} specialArmorClassBonus
 * @property {Item[]} items
 * @property {Item|null} equippedArmor
 * @property {Item|null} equippedShield
 * @property {string|null} activeWeaponId
 * @property {"melee"|"ranged"|null} activeWeaponMode
 * @property {ArcaneSpellcasting=} arcane
 * @property {DivineSpellcasting=} divine
 */

/**
 * @typedef {Object} ArcaneSpellcasting
 * @property {Spell[]} knownSpells
 * @property {{ [level: number]: MemorizedSpell[] }} memorizedSpellsByLevel
 * @property {{ [level: number]: number }} dailySpellSlots
 * @property {{ [level: number]: MemorizedSpell[] }} lastMemorizedSpellsByLevel
 */

/**
 * @typedef {Object} DivineSpellcasting
 * @property {{ [level: number]: MemorizedSpell[] }} memorizedSpellsByLevel
 * @property {{ [level: number]: number }} dailySpellSlots
 * @property {{ [level: number]: MemorizedSpell[] }} lastPreparedSpellsByLevel
 */

/**
 * Creates a new Character.
 * @param {string} name
 * @param {string} charClass
 * @returns {Character}
 */
export function createCharacter(name, charClass) {
    return {
        id: crypto.randomUUID(),
        name,
        class: charClass,
        level: 1,
        alignment: "Neutral",
        specialArmorClassBonus: 0,
        rolledHitPoints: 0,
        currentHitPoints: 0,
        strength: 10,
        intelligence: 10,
        wisdom: 10,
        dexterity: 10,
        constitution: 10,
        charisma: 10,
        items: [],
        equippedArmor: null,
        equippedShield: null,
        activeWeaponId: null,
        activeWeaponMode: null,
        arcane: undefined,
        divine: undefined
    };
}
