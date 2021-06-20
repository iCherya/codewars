/**
 * 8 kyu - Exclamation marks series #2: Remove all exclamation marks from the end of sentence
 * https://www.codewars.com/kata/57faece99610ced690000165
 */
const remove = (s = '') => {
    while (s.endsWith('!')) {
        s = s.slice(0, -1);
    }

    return s;
};
