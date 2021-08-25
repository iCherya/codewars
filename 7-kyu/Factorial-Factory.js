/**
 * 7 kyu - Factorial Factory
 * https://www.codewars.com/kata/528e95af53dcdb40b5000171
 */
const factorial = (n) => {
    if (n < 0) return null;
    if (n === 0) return 1;

    return n * factorial(n - 1);
};
