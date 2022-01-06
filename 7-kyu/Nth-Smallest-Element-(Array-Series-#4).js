/**
 * 7 kyu - Nth Smallest Element (Array Series #4)
 * https://www.codewars.com/kata/5a512f6a80eba857280000fc
 */
const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1];
