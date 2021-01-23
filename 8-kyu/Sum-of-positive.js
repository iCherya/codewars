/**
 * 8 kyu - Sum of positive
 * https://www.codewars.com/kata/5715eaedb436cf5606000381
 */
const positiveSum = (arr) => arr.filter((el) => el > 0).reduce((acc, cur) => acc + cur, 0);
