/**
 * 7 kyu - Sort Numbers
 * https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
 */
const solution = (nums) => (Array.isArray(nums) ? nums.sort((a, b) => a - b) : []);
