/**
 * 6 kyu - Primorial Of a Number
 * https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124
 */
const numPrimorial = (n) => {
    const primes = [2];

    const isPrime = (number) => {
        for (const item of primes) {
            if (number % item === 0) return false;
            if (item * item > number) break;
        }

        return true;
    };

    let i = 3;
    while (primes.length < n) {
        if (isPrime(i)) primes.push(i);
        i++;
    }

    return primes.reduce((acc, curr) => acc * curr, 1);
};
