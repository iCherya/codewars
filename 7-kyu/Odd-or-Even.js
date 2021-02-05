/**
 * 7 kyu - Odd or Even?
 * https://www.codewars.com/kata/5949481f86420f59480000e7
 */
const oddOrEven = (array) =>
    array.reduce((acc, curr) => acc + curr, 0) % 2 === 0 ? 'even' : 'odd';
