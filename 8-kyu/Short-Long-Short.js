/**
 * 8 kyu - Short Long Short
 * https://www.codewars.com/kata/50654ddff44f800200000007
 */
const solution = (a, b) => {
    const [long, short] = a.length > b.length ? [a, b] : [b, a];

    return short + long + short;
};
