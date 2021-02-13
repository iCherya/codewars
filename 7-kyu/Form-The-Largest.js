/**
 * 7 kyu - Form The Largest
 * https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e
 */
const maxNumber = (n) =>
    +n
        .toString()
        .split('')
        .map(Number)
        .sort((a, b) => b - a)
        .join('');
