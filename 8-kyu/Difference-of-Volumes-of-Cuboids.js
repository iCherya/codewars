/**
 * 8 kyu - Difference of Volumes of Cuboids
 * https://www.codewars.com/kata/58cb43f4256836ed95000f97
 */
const findDifference = (a, b) =>
    Math.abs(a.reduce((acc, curr) => acc * curr, 1) - b.reduce((acc, curr) => acc * curr, 1));
