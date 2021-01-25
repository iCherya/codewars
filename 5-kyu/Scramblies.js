/**
 * 5 kyu - Scramblies
 * https://www.codewars.com/kata/55c04b4cc56a697bb0000048
 */
const scramble = (str1, str2) => {
    const map = {};

    for (const char of str1) {
        if (!map[char]) {
            map[char] = 0;
        }
        map[char]++;
    }

    for (const char of str2) {
        if (char in map) {
            map[char]--;
            if (map[char] < 0) return false;
        } else {
            return false;
        }
    }

    return true;
};
