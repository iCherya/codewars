/**
 * 7 kyu - Maximum Product
 * https://www.codewars.com/kata/5a4138acf28b82aa43000117
 */
const adjacentElementsProduct = (array) => {
    let max = -Infinity;

    for (let i = 1; i < array.length; i++) {
        const curr = array[i] * array[i - 1];
        max = Math.max(max, curr);
    }

    return max;
};
