/**
 * 8 kyu - Convert number to reversed array of digits
 * https://www.codewars.com/kata/5583090cbe83f4fd8c000051
 */
const digitize = (n) => n.toString().split('').map(Number).reverse();
