/**
 * 7 kyu - Sort Out The Men From Boys
 * https://www.codewars.com/kata/5af15a37de4c7f223e00012d
 */
const menFromBoys = (arr) => {
    arr = Array.from(new Set(arr));

    const odd = arr.filter((num) => num % 2).sort((a, b) => b - a);
    const even = arr.filter((num) => !(num % 2)).sort((a, b) => a - b);

    return [...even, ...odd];
};
