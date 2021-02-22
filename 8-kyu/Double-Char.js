/**
 * 8 kyu - Double Char
 * https://www.codewars.com/kata/56b1f01c247c01db92000076
 */
const doubleChar = (str) => {
    let result = '';

    for (const char of str) {
        result += char + char;
    }

    return result;
};
