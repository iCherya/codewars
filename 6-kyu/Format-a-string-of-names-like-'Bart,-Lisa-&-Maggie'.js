/**
 * 6 kyu - Format a string of names like 'Bart, Lisa & Maggie'.
 * https://www.codewars.com/kata/53368a47e38700bd8300030d
 */
const list = (names) => {
    const result = names
        .map((el) => el.name)
        .join(', ')
        .split('');

    result[result.lastIndexOf(',')] = ' &';

    return result.join('');
};
