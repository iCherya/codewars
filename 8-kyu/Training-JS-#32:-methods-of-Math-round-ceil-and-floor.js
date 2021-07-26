/**
 * 8 kyu - Training JS #32: methods of Math---round() ceil() and floor()
 * https://www.codewars.com/kata/5732d3c9791aafb0e4001236
 */
const roundIt = (n) => {
    const [left, right] = n
        .toString()
        .split('.')
        .map((el) => el.length);

    if (left > right) return Math.floor(n);
    if (left < right) return Math.ceil(n);
    return Math.round(n);
};
