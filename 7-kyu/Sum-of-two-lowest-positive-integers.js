/**
 * 7 kyu - Sum of two lowest positive integers
 * https://www.codewars.com/kata/558fc85d8fd1938afb000014
 */
const sumTwoSmallestNumbers = (numbers) => {
    return numbers
        .sort((a, b) => a - b)
        .splice(0, 2)
        .reduce((acc, curr) => acc + curr, 0);
};
