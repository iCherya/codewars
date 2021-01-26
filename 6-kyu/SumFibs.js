/**
 * 6 kyu - SumFibs
 * https://www.codewars.com/kata/56662e268c0797cece0000bb
 */
const sumFibs = (n) => {
    const fib = [1, 1];

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }

    return fib.filter((el) => el % 2 === 0).reduce((acc, curr) => acc + curr, 0);
};
