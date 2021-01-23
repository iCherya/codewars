/**
 * 6 kyu - Counting Duplicates
 * https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
 */
const duplicateCount = (text) => {
    const map = {};

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        !map[char] && (map[char] = 0);
        map[char]++;
    }

    return Object.values(map).filter((el) => el > 1).length;
};
