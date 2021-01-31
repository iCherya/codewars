/**
 * 6 kyu - Break camelCase
 * https://www.codewars.com/kata/5208f99aee097e6552000148
 */
const solution = (string) => {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (char.toUpperCase() === char) {
            result += ' ';
        }
        result += char;
    }

    return result;
};
