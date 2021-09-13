/**
 * 7 kyu - Largest pair sum in array
 * https://www.codewars.com/kata/556196a6091a7e7f58000018
 */
const largestPairSum = (numbers) =>
    numbers
        .sort((a, b) => b - a)
        .slice(0, 2)
        .reduce((a, c) => a + c, 0);
