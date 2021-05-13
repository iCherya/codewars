/**
 * 8 kyu - Gravity Flip
 * https://www.codewars.com/kata/5f70c883e10f9e0001c89673
 */
const flip = (dest, arr) => arr.sort((a, b) => (dest === `L` ? b - a : a - b));
