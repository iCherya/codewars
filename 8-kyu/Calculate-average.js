/**
 * 8 kyu - Calculate average
 * https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
 */
const find_average = (array) => array.reduce((acc, curr) => acc + curr, 0) / array.length;
