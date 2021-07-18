/**
 * 7 kyu - Sum of all arguments
 * https://www.codewars.com/kata/540c33513b6532cd58000259
 */
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
