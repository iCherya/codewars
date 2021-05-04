/**
 * 8 kyu - Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
 * https://www.codewars.com/kata/57faf7275c991027af000679
 */
const remove = (s, n) => {
    for (let i = 0; i < n; i++) {
        s = s.replace('!', '');
    }

    return s;
};
