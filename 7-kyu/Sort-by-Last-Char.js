/**
 * 7 kyu - Sort by Last Char
 * https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0
 */
const last = (x) => x.split(' ').sort((a, b) => a.slice(-1) > b.slice(-1));
