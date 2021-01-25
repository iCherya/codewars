/**
 * 7 kyu - All Star Code Challenge #14
 * https://www.codewars.com/kata/5864eb8039c5ab9cd400005c
 */
const median = (array) => {
    array.sort((a, b) => a - b);
    const center = Math.floor(array.length / 2);

    return array.length % 2 === 0 ? (array[center] + array[center - 1]) / 2 : array[center];
};
