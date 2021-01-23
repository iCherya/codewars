/**
 * 6 kyu - Bit Counting
 * https://www.codewars.com/kata/526571aae218b8ee490006f4
 */
const countBits = (n) => n.toString(2).split('1').length - 1;
