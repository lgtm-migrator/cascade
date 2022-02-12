/**
 * Credit to https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/bits
 */

/**
 * Get the bit of number
 * @param number 
 * @param bitPosition 
 * @returns {1 || 0}
 */
export function getBit(number: number, bitPosition: number): number {
    return (number >> bitPosition) & 1;
  }
  
  