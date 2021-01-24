/**
 * 7 kyu - Sum of Minimums!
 * https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
 */
const sumOfMinimums = (arr) =>
    arr.map((el) => el.sort((a, b) => a - b)).reduce((acc, curr) => acc + curr[0], 0);
