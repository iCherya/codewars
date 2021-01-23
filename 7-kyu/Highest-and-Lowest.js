/**
 * 7 kyu - Highest and Lowest
 * https://www.codewars.com/kata/554b4ac871d6813a03000035
 */
const highAndLow = (numbers) => {
    const arr = numbers
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a);

    return arr[0] + ' ' + arr.pop();
};
