/**
 * 7 kyu - Ordered Count of Characters
 * https://www.codewars.com/kata/57a6633153ba33189e000074
 */
const orderedCount = (text) => {
    const map = {};

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (!map[char]) map[char] = { value: 0, order: i };
        map[char].value += 1;
    }

    return Object.entries(map)
        .sort((a, b) => a[1].order - b[1].order)
        .map(([char, { value }]) => [char, value]);
};
