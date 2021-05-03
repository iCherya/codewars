/**
 * 8 kyu - Add Length
 * https://www.codewars.com/kata/559d2284b5bb6799e9000047
 */
const addLength = (str) => str.split(' ').map((el) => `${el} ${el.length}`);
