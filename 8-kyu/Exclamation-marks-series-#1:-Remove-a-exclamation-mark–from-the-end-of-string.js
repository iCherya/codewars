/**
 * 8 kyu - Exclamation marks series #1: Remove a exclamation mark from the end of string
 * https://www.codewars.com/kata/57fae964d80daa229d000126
 */
const remove = (s) => (s[s.length - 1] === '!' ? s.slice(0, -1) : s);
