/**
 * 7 kyu - Find the vowels
 * https://www.codewars.com/kata/5680781b6b7c2be860000036
 */
const vowelIndices = (word) =>
    word
        .split('')
        .map((letter, idx) => ({
            letter: letter.toLowerCase(),
            idx: idx + 1
        }))
        .filter((item) => 'aeiouy'.includes(item.letter))
        .map((item) => item.idx);
