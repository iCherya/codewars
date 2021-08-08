/**
 * 8 kyu - Training JS #14: Methods of Number object--toString() and toLocaleString()
 * https://www.codewars.com/kata/57238ceaef9008adc7000603
 */
const colorOf = (r, g, b) =>
    [r, g, b].reduce((acc, curr) => acc + curr.toString(16).padStart(2, 0), '#');
