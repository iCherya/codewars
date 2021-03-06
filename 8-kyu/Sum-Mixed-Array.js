/**
 * 8 kyu - Sum Mixed Array
 * https://www.codewars.com/kata/57eaeb9578748ff92a000009
 */
const sumMix = (x) => x.map(Number).reduce((acc, curr) => acc + curr, 0);
