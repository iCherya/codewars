/**
 * 8 kyu - Wilson primes
 * https://www.codewars.com/kata/55dc4520094bbaf50e0000cb
 */
const amIWilson = (p) => {
    const factorial = (n) => (n ? n * factorial(n - 1) : 1);

    return Number.isInteger((factorial(p - 1) + 1) / p ** 2);
};
