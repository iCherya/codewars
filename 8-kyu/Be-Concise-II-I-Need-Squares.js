/**
 * 8 kyu - Be Concise II - I Need Squares
 * https://www.codewars.com/kata/56f4f7cfaf5b1f8cd100060e
 */
const squaresOnly = (array) => array.filter((el) => Number.isInteger(Math.sqrt(el)));
