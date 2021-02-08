/**
 * 7 kyu - Remove duplicate words
 * https://www.codewars.com/kata/5b39e3772ae7545f650000fc
 */
const removeDuplicateWords = (s) => {
    const set = new Set(s.split(' '));

    return Array.from(set).join(' ');
};
