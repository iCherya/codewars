/**
 * 8 kyu - Multiply the number
 * https://www.codewars.com/kata/5708f682c69b48047b000e07
 */
const multiply = (number) => number * 5 ** Math.abs(number).toString().length;
