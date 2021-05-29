/**
 * 7 kyu - Hamming Distance - Part 1: Binary codes
 * https://www.codewars.com/kata/5624e574ec6034c3a20000e6
 */
const hammingDistance = (a, b) => {
    let count = 0;
    let i = 0;

    while (i < a.length) {
        if (a[i] !== b[i]) count++;
        i++;
    }

    return count;
};
