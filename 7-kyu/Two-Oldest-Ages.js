/**
 * 7 kyu - Two Oldest Ages
 * https://www.codewars.com/kata/511f11d355fe575d2c000001
 */
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2);
