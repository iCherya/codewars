/**
 * 8 kyu - Get number from string
 * https://www.codewars.com/kata/57a37f3cbb99449513000cd8
 */
const getNumberFromString = (s) => {
    let result = '';

    for (const char of s) {
        if (char.match(/\d/)) result += char;
    }

    return Number(result);
};
