/**
 * 7 kyu - Return the first M multiples of N
 * https://www.codewars.com/kata/593c9175933500f33400003e
 */
const multiples = (m, n) => new Array(m).fill().map((_, idx) => n * ++idx);
