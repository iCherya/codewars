/**
 * 7 kyu - All Star Code Challenge #7
 * https://www.codewars.com/kata/586427d883f7e6b5670001dc
 */
const compute = (n) => {
    if (n < 3 || n % 2 === 0) {
        return 0;
    }

    let result = 1;

    for (let i = 3; i <= n; i += 2) {
        result += 1 / i ** 2;
    }

    return result;
};
