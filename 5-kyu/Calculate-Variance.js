/**
 * 5 kyu - Calculate Variance
 * https://www.codewars.com/kata/5266fba01283974e720000fa
 */
const variance = (numbers) => {
    const len = numbers.length;
    const mean = numbers.reduce((acc, curr) => acc + curr, 0) / len;

    return numbers.reduce((acc, curr) => acc + (curr - mean) ** 2, 0) / len;
};
