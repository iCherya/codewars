/**
 * 7 kyu - Largest Elements
 * https://www.codewars.com/kata/53d32bea2f2a21f666000256
 */
const largest = (n, xs) => xs.sort((a, b) => a - b).slice(xs.length - n);
