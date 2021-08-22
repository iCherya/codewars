/**
 * 8 kyu - Ensure question
 * https://www.codewars.com/kata/5866fc43395d9138a7000006
 */
const ensureQuestion = (s) =>
    `${s
        .split('')
        .filter((char) => char !== '?')
        .join('')}?`;
