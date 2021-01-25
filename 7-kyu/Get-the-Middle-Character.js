/**
 * 7 kyu - Get the Middle Character
 * https://www.codewars.com/kata/56747fd5cb988479af000028
 */
const getMiddle = (s) => {
    const middle = Math.floor(s.length / 2);

    return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s[middle];
};
