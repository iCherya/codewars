/**
 * 7 kyu - Simple remove duplicates
 * https://www.codewars.com/kata/5ba38ba180824a86850000f7
 */
const solve = (arr) => Array.from(new Set(arr.reverse())).reverse();
