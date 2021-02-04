/**
 * 8 kyu - Get the mean of an array
 * https://www.codewars.com/kata/563e320cee5dddcf77000158
 */
const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
