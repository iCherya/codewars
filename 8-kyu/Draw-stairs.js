/**
 * 8 kyu - Draw stairs
 * https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
 */
const drawStairs = (n) => [...new Array(n)].map((el, i) => ' '.repeat(i) + 'I').join('\n');
