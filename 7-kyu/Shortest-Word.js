/**
 * 7 kyu - Shortest Word
 * https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
 */
const findShort = (s) => Math.min(...s.split(' ').map((el) => el.length));
