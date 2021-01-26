/**
 * 5 kyu - Where my anagrams at?
 * https://www.codewars.com/kata/523a86aa4230ebb5420001e1
 */
const anagrams = (word, words) => {
    word = word.split('').sort().join('');
    const result = [];

    for (const anagram of words) {
        if (anagram.split('').sort().join('') === word) result.push(anagram);
    }

    return result;
};
