/**
 * 7 kyu - Halving Sum
 * https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d
 */
const halvingSum = (n, sum = n) => {
    if (n < 2) return sum;
    sum += Math.floor(n / 2);

    return halvingSum(n / 2, sum);
};
