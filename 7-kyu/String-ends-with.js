/**
 * 7 kyu - String ends with?
 * https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
 */
const solution = (str, ending) => {
    if (ending.length === 0) return true;

    return str.slice(-ending.length) === ending;
};
