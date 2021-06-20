/**
 * 7 kyu - Factorial
 * https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc
 * https://www.codewars.com/kata/57a049e253ba33ac5e000212
 */
const factorial = (n) => {
    if (n < 0 || n > 12) throw RangeError;
    if (n === 0) return 1;

    return factorial(n - 1) * n;
};
