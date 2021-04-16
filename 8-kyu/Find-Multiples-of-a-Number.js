/**
 * 8 kyu - Find Multiples of a Number
 * https://www.codewars.com/kata/58ca658cc0d6401f2700045f
 */
const findMultiples = (integer, limit) => {
    const result = [];

    for (let i = integer; i <= limit; i += integer) {
        result.push(i);
    }

    return result;
};
