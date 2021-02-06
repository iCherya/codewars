/**
 * 6 kyu - Count characters in your string
 * https://www.codewars.com/kata/52efefcbcdf57161d4000091
 */
const count = (string) => {
    const map = {};
    if (string.length === 0) return map;

    for (const char of string) {
        if (!map[char]) map[char] = 0;
        map[char]++;
    }

    return map;
};
