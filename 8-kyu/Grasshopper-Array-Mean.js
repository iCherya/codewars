/**
 * 8 kyu - Grasshopper - Array Mean
 * https://www.codewars.com/kata/55d277882e139d0b6000005d
 */
const findAverage = (nums) => nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
