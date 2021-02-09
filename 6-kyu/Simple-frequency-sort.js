/**
 * 6 kyu - Simple frequency sort
 * https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc
 */
const solve = (arr) => {
    const frequencies = {};

    arr.forEach((number) => {
        frequencies[number] = (frequencies[number] || 0) + 1;
    });

    arr.sort((a, b) => {
        return frequencies[b] - frequencies[a] || a - b;
    });

    return arr;
};
