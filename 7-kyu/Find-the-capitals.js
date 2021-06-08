/**
 * 7 kyu - Find the capitals
 * https://www.codewars.com/kata/539ee3b6757843632d00026b
 */
const capitals = (word) => {
    const result = [];

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if (char.toUpperCase() === char) result.push(i);
    }

    return result;
};
