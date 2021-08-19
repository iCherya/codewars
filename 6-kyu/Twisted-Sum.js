/**
 * 6 kyu - Twisted Sum
 * https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f
 */
const twistedSum = (n) => {
    let result = 0;

    for (let i = 0; i <= n; i++) {
        result += i
            .toString()
            .split('')
            .map(Number)
            .reduce((acc, curr) => acc + curr, 0);
    }

    return result;
};
