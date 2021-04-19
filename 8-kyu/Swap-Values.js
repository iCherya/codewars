/**
 * 8 kyu - Swap Values
 * https://www.codewars.com/kata/5388f0e00b24c5635e000fc6
 */
const swapValues = (arr) => {
    [arr[0], arr[1]] = [arr[1], arr[0]];

    return arr;
};
