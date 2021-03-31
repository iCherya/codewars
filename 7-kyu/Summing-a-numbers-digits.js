/**
 * 7 kyu - Summing a number's digits
 * https://www.codewars.com/kata/52f3149496de55aded000410
 */
const sumDigits = (number) =>
    number
        .toString()
        .split('')
        .map(Number)
        .filter((el) => !Number.isNaN(el))
        .reduce((acc, curr) => acc + curr, 0);
