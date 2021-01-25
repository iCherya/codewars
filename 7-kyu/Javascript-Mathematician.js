/**
 * 7 kyu - Javascript Mathematician
 * https://www.codewars.com/kata/55c211cce1ef691d9b000061
 */
const calculate = (...param) => (...param2) =>
    [...param, ...param2].reduce((acc, curr) => acc + curr, 0);
