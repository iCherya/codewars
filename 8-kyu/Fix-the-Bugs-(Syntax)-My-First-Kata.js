/**
 * 8 kyu - Fix the Bugs (Syntax) - My First Kata
 * https://www.codewars.com/kata/56aed32a154d33a1f3000018
 */
const myFirstKata = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    }

    return (a % b) + (b % a);
};
