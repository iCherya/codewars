/**
 * 7 kyu - Sum of all the multiples of 3 or 5
 * https://www.codewars.com/kata/57f36495c0bb25ecf50000e7
 */
const findSum = (n) => {
    let sum = 0;

    for (let i = 3; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }

    return sum;
};
