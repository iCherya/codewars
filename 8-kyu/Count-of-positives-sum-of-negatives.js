/**
 * 8 kyu - Count of positives / sum of negatives
 * https://www.codewars.com/kata/576bb71bbbcf0951d5000044
 */
const countPositivesSumNegatives = (input) => {
    if (!Array.isArray(input) || input.length === 0) return [];

    const positiveCount = input.filter((el) => el > 0).length;
    const negariveSum = input.filter((el) => el < 0).reduce((a, c) => a + c, 0);

    return [positiveCount, negariveSum];
};
