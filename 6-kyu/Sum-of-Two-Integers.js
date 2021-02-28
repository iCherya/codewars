/**
 * 6 kyu - Sum of Two Integers
 * https://www.codewars.com/kata/5a9c35e9ba1bb5c54a0001ac
 */
const add = (x, y) => {
    while (y !== 0) {
        const carry = x & y;
        x = x ^ y;
        y = carry << 1;
    }

    return x;
};
