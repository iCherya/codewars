/**
 * 7 kyu - last digits of a number
 * https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0
 */
const lastDigit = (n, d) =>
  d <= 0 ? [] : n.toString().split('').map(Number).slice(-d);
