/**
 * 6 kyu - Count letters in string
 * https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d
 */
const letterCount = (s) => {
    const result = {};

    for (const char of s) {
        if (!result[char]) result[char] = 0;
        result[char] += 1;
    }

    return result;
};
