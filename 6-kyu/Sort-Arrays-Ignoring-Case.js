/**
 * 6 kyu - Sort Arrays (Ignoring Case)
 * https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9
 */
const sortme = (names) => names.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
