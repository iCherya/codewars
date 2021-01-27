/**
 * 6 kyu - Playing with digits
 * https://www.codewars.com/kata/5552101f47fc5178b1000050
 */
const digPow = (n, p) => {
    let result = n
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, curr) => acc + Math.pow(curr, p++), 0);

    return Number.isInteger(result / n) ? result / n : -1;
};
