/**
 * 8 kyu - Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
 * https://www.codewars.com/kata/57faf12b21c84b5ba30001b0
 */
const remove = (s) => {
    let result = '';

    for (const char of s) {
        if (char !== '!') result += char;
    }

    return `${result}!`;
};
