/**
 * 6 kyu - Complete Fibonacci Series
 * https://www.codewars.com/kata/5239f06d20eeab9deb00049b
 */
const fibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fibArr = [0, 1];

    for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }

    return fibArr;
};
