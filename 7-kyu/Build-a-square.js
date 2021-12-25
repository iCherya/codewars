/**
 * 7 kyu - Build a square
 * https://www.codewars.com/kata/59a96d71dbe3b06c0200009c
 */
const generateShape = (integer) =>
  new Array(integer).fill(new Array(integer).fill('+').join('')).join('\n');
