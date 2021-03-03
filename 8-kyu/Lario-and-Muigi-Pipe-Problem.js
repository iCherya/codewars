/**
 * 8 kyu - Lario and Muigi Pipe Problem
 * https://www.codewars.com/kata/56b29582461215098d00000f
 */
const pipeFix = (numbers) => {
    const min = numbers[0];
    const max = numbers[numbers.length - 1];
    const result = [];

    for (let i = min; i <= max; i += 1) {
        result.push(i);
    }

    return result;
};
