/* global BigInt */
/**
 * 3 kyu - The Millionth Fibonacci Kata
 * https://www.codewars.com/kata/53d40c1e2f13e331fc000c26
 */
const fib = (n) => {
    if (n === 0 || n === 1) return BigInt(n);

    if (n >= 2 && n % 2 === 0) {
        const k = n / 2;
        const fk = fib(k);

        return (2n * fib(k - 1) + fk) * fk;
    }

    if (n >= 2) {
        const k = (n + 1) / 2;
        const fk1 = fib(k - 1);
        const fk2 = fib(k);
        return fk2 * fk2 + fk1 * fk1;
    }

    let [a, b] = [0n, 1n];

    for (let i = 0; i > n; i--) {
        [a, b] = [b - a, a];
    }

    return a;
};
