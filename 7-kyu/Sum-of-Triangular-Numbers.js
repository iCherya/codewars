/**
 * 7 kyu - Sum of Triangular Numbers
 * https://www.codewars.com/kata/580878d5d27b84b64c000b51
 */
const sumTriangularNumbers = (n) => {
    if (n < 0) return 0;

    return new Array(n + 1)
        .fill(null)
        .map((_, idx) => idx)
        .reduce((acc, curr) => acc + ((curr + 1) * curr) / 2, 0);
};
