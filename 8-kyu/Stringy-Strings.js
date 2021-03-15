/**
 * 8 kyu - Stringy Strings
 * https://www.codewars.com/kata/563b74ddd19a3ad462000054
 */
const stringy = (size) => {
    let result = '';
    let current = '1';

    while (result.length < size) {
        result += current;
        if (current === '1') current = '0';
        else current = '1';
    }

    return result;
};
