/**
 * 8 kyu - CSV representation of array
 * https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
 */
const toCsvText = (array) => array.map((el) => el.join(',')).join('\n');
