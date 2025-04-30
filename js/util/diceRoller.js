/**
 * Rolls a d20 and returns the raw and modified results.
 * @param {number} modifier
 * @returns {{ raw: number, total: number }}
 */
export function rollD20(modifier = 0) {
    const raw = Math.floor(Math.random() * 20) + 1;
    return { raw, total: raw + modifier };
}

/**
 * Rolls a damage die and returns the raw and modified results.
 * @param {number} dieSize
 * @param {number} modifier
 * @returns {{ raw: number, total: number }}
 */
export function rollDamage(dieSize, modifier = 0) {
    const raw = Math.floor(Math.random() * dieSize) + 1;
    return { raw, total: raw + modifier };
}