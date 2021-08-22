/**
 * 7 kyu - Reverse a Number
 * https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5
 */
const reverseNumber = (n) => {
    const isNegative = Math.sign(n) === -1;
    const revered = +Math.abs(n).toString().split('').reverse().join('');

    return isNegative ? revered * -1 : revered;
};
