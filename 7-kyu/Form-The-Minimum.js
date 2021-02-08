/**
 * 7 kyu - Form The Minimum
 * https://www.codewars.com/kata/5ac6932b2f317b96980000ca
 */
const minValue = (values) =>
    +Array.from(new Set(values))
        .sort((a, b) => a - b)
        .join('');
