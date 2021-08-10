/**
 * 7 kyu - Predict your age!
 * https://www.codewars.com/kata/5aff237c578a14752d0035ae
 */
const predictAge = (...ages) =>
    Math.floor(Math.sqrt(ages.map((age) => age ** 2).reduce((a, c) => a + c, 0)) / 2);
