/**
 * 6 kyu - N-th Fibonacci
 * https://www.codewars.com/kata/522551eee9abb932420004a0
 */
const nthFibo = (n) => {
    const fibArr = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }

    return fibArr[n - 1];
};
