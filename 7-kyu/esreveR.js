/**
 * 7 kyu - esreveR
 * https://www.codewars.com/kata/5413759479ba273f8100003
 */
const reverse = (array) => array.reduce((acc, curr) => [curr, ...acc], []);
