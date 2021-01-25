/**
 * 5 kyu - Memoized Fibonacci
 * https://www.codewars.com/kata/529adbf7533b761c560004e5
 */
const fibonacci = (n, memo = {}) => {
    if (n <= 1) return n;
    if (n in memo) return memo[n];
    memo[n - 1] = fibonacci(n - 1, memo);
    memo[n - 2] = fibonacci(n - 2, memo);

    return memo[n - 1] + memo[n - 2];
};
