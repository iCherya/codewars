/**
 * 8 kyu - Sum of Multiples
 * https://www.codewars.com/kata/57241e0f440cd279b5000829
 */
const sumMul = (n, m) => {
    let sum = 0;
    if (n < m) {
        for (let i = n; i < m; i += n) {
            sum += i;
        }
        return sum;
    } else {
        return 'INVALID';
    }
};
