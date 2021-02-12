/**
 * 7 kyu - By 3, or not by 3? That is the question...
 * https://www.codewars.com/kata/59f7fc109f0e86d705000043
 */
const divisibleByThree = (str) =>
    str
        .split('')
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0) %
        3 ===
    0;
