/**
 * 7 kyu - Fix string case
 * https://www.codewars.com/kata/5b180e9fedaa564a7000009a
 */
const solve = (s) => {
    const len = s.length;
    const lowerCase = s.match(/[a-z]/g) || [];
    const lowerCaseCount = lowerCase.length;

    if (lowerCaseCount * 2 < len) return s.toUpperCase();

    return s.toLowerCase();
};
