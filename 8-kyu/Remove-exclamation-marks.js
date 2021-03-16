/**
 * 8 kyu - Remove exclamation marks
 * https://www.codewars.com/kata/57a0885cbb9944e24c00008e
 */
const removeExclamationMarks = (s) =>
    s
        .split('')
        .filter((el) => el !== '!')
        .join('');
