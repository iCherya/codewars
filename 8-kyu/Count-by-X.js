/**
 * 8 kyu - Count by X
 * https://www.codewars.com/kata/5513795bd3fafb56c200049e
 */
const countBy = (x, n) => {
    const z = [];

    let curr = x;
    while (curr <= x * n) {
        z.push(curr);
        curr += x;
    }
    return z;
};
