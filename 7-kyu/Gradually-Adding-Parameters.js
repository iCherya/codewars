/**
 * 7 kyu - Gradually Adding Parameters
 * https://www.codewars.com/kata/555b73a81a6285b6ce000047
 */
const add = (...arg) => arg.reduce((acc, curr, idx) => acc + curr * (idx + 1), 0);
