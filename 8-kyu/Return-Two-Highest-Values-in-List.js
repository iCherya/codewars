/**
 * 8 kyu - Return Two Highest Values in List
 * https://www.codewars.com/kata/57ab3c09bb994429df000a4a
 */
const twoHighest = (arr) => [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
