/**
 * Beta - All Star Code Challenge #10
 * https://www.codewars.com/kata/58646a1173bd9c86080000ef
 */
const fibonacci = (n) => {
    if (n === 0) return 0;
    if (n <= 2) return 1;

    return fibonacci(n - 2) + fibonacci(n - 1);
};
