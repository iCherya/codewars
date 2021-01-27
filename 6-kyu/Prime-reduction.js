/**
 * 6 kyu - Prime reduction
 * https://www.codewars.com/kata/59aa6567485a4d03ff0000ca
 */
const solve = (a, b) => {
    let counter = 0;

    for (let i = a; i < b; i++) {
        if (isPrime(i) && reduct(i) === 1) {
            counter++;
        }
    }

    return counter;
};

const reduct = (n) => {
    while (n > 6) {
        n = n
            .toString()
            .split('')
            .reduce((acc, curr) => acc + curr ** 2, 0);
    }

    return n;
};

const isPrime = (n) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
    }

    return n > 1;
};
