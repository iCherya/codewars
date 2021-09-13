/**
 * 7 kyu - Love vs friendship
 * https://www.codewars.com/kata/59706036f6e5d1e22d000016
 */
const wordsToMarks = (string) =>
    string.split('').reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0);
