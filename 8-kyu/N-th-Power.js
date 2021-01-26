/**
 * 8 kyu - N-th Power
 * https://www.codewars.com/kata/57d814e4950d8489720008db
 */
const index = (array, n) => (array[n] ? Math.pow(array[n], n) : -1);
