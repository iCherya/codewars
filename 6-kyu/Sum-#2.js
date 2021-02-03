/**
 * 6 kyu - Sum #2
 * https://www.codewars.com/kata/5873a8890565844b910001f8
 */
const sum = (a) => (a === undefined ? 0 : (b) => (b === undefined ? a : sum(a + b)));
