/**
 * 7 kyu - Gauß needs help! (Sums of a lot of numbers)
 * https://www.codewars.com/kata/54df2067ecaa226eca000229
 */
const f = (n) => {
    if (typeof n !== 'number' && !Number.isInteger(n) && n < 1) return false;

    return new Array(n + 1)
        .fill(null)
        .map((num, idx) => idx)
        .reduce((acc, cur) => acc + cur, 0);
};
