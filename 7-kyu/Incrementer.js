/**
 * 7 kyu - Incrementer
 * https://www.codewars.com/kata/590e03aef55cab099a0002e8
 */
const incrementer = (nums) =>
  nums.map((number, idx) => (number + idx + 1) % 10);
