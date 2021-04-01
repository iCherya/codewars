/**
 * 8 kyu - Generate range of integers
 * https://www.codewars.com/kata/55eca815d0d20962e1000106
 */
const generateRange = (min, max, step) => {
    const result = [];

    for (let i = min; i <= max; i += step) {
        result.push(i);
    }

    return result;
};
