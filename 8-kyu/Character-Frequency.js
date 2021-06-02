/**
 * 8 kyu - Character Frequency
 * https://www.codewars.com/kata/548ef5b7f33a646ea50000b2
 */
const charFreq = (message) => {
    const map = {};

    for (const char of message) {
        if (!map[char]) map[char] = 0;
        map[char] += 1;
    }

    return map;
};
