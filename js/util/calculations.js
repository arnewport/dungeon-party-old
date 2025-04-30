import {
    attackBonusTables,
    savingThrowTables,
    spellSlotTables,
    classToAttackTableKey,
    classToSavingThrowKey,
    classToSpellSlotKey
} from "../state/lookupTables.js";

/**
 * Returns the ability modifier for a given score.
 * @param {number} score
 * @returns {number}
 */
export function getAbilityModifier(score) {
    if (score === null) return 0;
    if (score >= 18) return 3;
    if (score >= 16) return 2;
    if (score >= 13) return 1;
    if (score >= 9) return 0;
    if (score >= 6) return -1;
    if (score >= 4) return -2;
    return -3;
}

/**
 * Calculates the character's maximum hit points.
 * @param {Character} character
 * @returns {number}
 */
export function calculateMaxHitPoints(character) {
    const conBonus = getAbilityModifier(character.constitution);
    const baseHp = character.rolledHitPoints;

    const cappedLevel = Math.min(character.level, 9);
    const bonusLevels = Math.max(character.level - 9, 0);

    const post9BonusMap = {
        cleric: 1,
        magicUser: 1,
        thief: 2,
        elf: 2,
        dwarf: 3,
        fighter: 3
    };

    const post9Bonus = post9BonusMap[character.class] || 0;

    const total =
        baseHp + (conBonus * cappedLevel) + (bonusLevels * post9Bonus);

    return Math.max(total, 1);
}

export function calculateArmorClass(character) {
    let ac = 10;

    const armor = character.equippedItems.armor;
    if (armor) {
        if (armor.armorType === "leather") ac += 2;
        else if (armor.armorType === "chain") ac += 4;
        else if (armor.armorType === "plate") ac += 6;
        ac += armor.magicBonus || 0;
    }

    const shield = character.equippedItems.shield;
    if (shield) {
        ac += 1;
        ac += shield.magicBonus || 0;
    }

    ac += getAbilityModifier(character.dexterity);

    ac += character.specialArmorClassBonus || 0;

    for (const item of character.equippedItems.jewelry || []) {
        ac += item.armorBonus || 0;
    }

    return ac;
}

/**
 * Calculates the character's saving throws, including base, bonus, and clamped total.
 * @param {Character} character
 * @returns {Object} structured saves: { death, wands, paralysis, breath, spells }
 */
export function calculateSavingThrows(character) {
    const key = classToSavingThrowKey[character.class];
    const base = savingThrowTables[key]?.[character.level] || {
        death: 20, wands: 20, paralysis: 20, breath: 20, spells: 20
    };

    const wisdomBonus = getAbilityModifier(character.wisdom);

    let jewelryBonus = 0;
    for (const item of character.equippedItems.jewelry || []) {
        jewelryBonus += item.savingThrowBonus || 0;
    }

    const bonuses = {
        death: jewelryBonus,
        wands: jewelryBonus + wisdomBonus,
        paralysis: jewelryBonus + wisdomBonus,
        breath: jewelryBonus,
        spells: jewelryBonus + wisdomBonus
    };

    function clampSave(value) {
        return Math.min(Math.max(value, 2), 20);
    }

    return {
        death: {
            base: base.death,
            bonus: bonuses.death,
            total: clampSave(base.death - bonuses.death)
        },
        wands: {
            base: base.wands,
            bonus: bonuses.wands,
            total: clampSave(base.wands - bonuses.wands)
        },
        paralysis: {
            base: base.paralysis,
            bonus: bonuses.paralysis,
            total: clampSave(base.paralysis - bonuses.paralysis)
        },
        breath: {
            base: base.breath,
            bonus: bonuses.breath,
            total: clampSave(base.breath - bonuses.breath)
        },
        spells: {
            base: base.spells,
            bonus: bonuses.spells,
            total: clampSave(base.spells - bonuses.spells)
        }
    };
}

/**
 * Returns the base attack bonus from class and level.
 * @param {Character} character
 * @returns {number}
 */
export function getBaseAttackBonus(character) {
    const key = classToAttackTableKey[character.class];
    return attackBonusTables[key]?.[character.level] || 0;
}

/**
 * Returns the melee attack bonus: base + STR modifier.
 * @param {Character} character
 * @returns {number}
 */
export function getMeleeAttackBonus(character) {
    return getBaseAttackBonus(character) + getAbilityModifier(character.strength);
}

/**
 * Returns the ranged attack bonus: base + DEX modifier (+1 for halflings).
 * @param {Character} character
 * @returns {number}
 */
export function getRangedAttackBonus(character) {
    const dexBonus = getAbilityModifier(character.dexterity);
    const halflingBonus = character.class === "halfling" ? 1 : 0;
    return getBaseAttackBonus(character) + dexBonus + halflingBonus;
}

/**
 * Returns the total attack bonus with the character's active weapon.
 * @param {Character} character
 * @param {"melee"|"ranged"} mode - Attack mode
 * @returns {number}
 */
export function calculateAttackBonus(character, mode) {
    const weapon = character.equippedItems.find(i => i.id === character.activeWeaponId);
    if (!weapon || weapon.type !== "weapon") return 0;

    const baseModeBonus =
        mode === "melee" ? getMeleeAttackBonus(character) : getRangedAttackBonus(character);

    const weaponBonus = weapon.magicBonus || 0;

    return baseModeBonus + weaponBonus;
}

/**
 * Returns daily spell slots for a character.
 * @param {Character} character
 * @returns {Object} mapping spell level to number of castable spells
 */
export function getSpellSlots(character) {
    const key = classToSpellSlotKey[character.class];
    return spellSlotTables[key]?.[character.level] || {};
}
