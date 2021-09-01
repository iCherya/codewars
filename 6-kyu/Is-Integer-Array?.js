/**
 * 6 kyu - Is Integer Array?
 * https://www.codewars.com/kata/52a112d9488f506ae7000b95
 */
const isIntArray = (arr) => Array.isArray(arr) && arr.every((num) => Number.isInteger(num));
