/**
 * 8 kyu - Be Concise III - Sum Squares
 * https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7
 */
const sumSquares = (array) => array.reduce((acc, curr) => acc + curr ** 2, 0);
