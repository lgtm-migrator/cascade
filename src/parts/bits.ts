/**
 * Credit to https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/bits
 */

/**
 * @param number 
 * @param bitPosition 
 * @returns {1 || 0}
 */
export function getBit(number: number, bitPosition: number): number {
    return (number >> bitPosition) & 1;
}

/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
 export function setBit(number: number, bitPosition: number): number {
    return number | (1 << bitPosition);
  }