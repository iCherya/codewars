/**
 * 8 kyu - Remove First and Last Character Part Two
 * https://www.codewars.com/kata/570597e258b58f6edc00230d
 */
const array = (arr) => arr.split(',').slice(1, -1).join(' ') || null;
