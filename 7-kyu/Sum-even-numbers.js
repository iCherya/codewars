/**
 * 7 kyu - Sum even numbers
 * https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3
 */
const sumEvenNumbers = (arr) =>
    arr.filter((el) => el % 2 === 0).reduce((acc, curr) => acc + curr, 0);
