/**
 * 7 kyu - Square Every Digit
 * https://www.codewars.com/kata/546e2562b03326a88e000020
 */
const squareDigits = (num) =>
    +num
        .toString()
        .split('')
        .reduce((acc, curr) => acc + curr ** 2, '');
