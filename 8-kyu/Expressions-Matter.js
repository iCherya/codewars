/**
 * 8 kyu - Expressions Matter
 * https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
 */
const expressionMatter = (a, b, c) => {
    const arr = [a * b * c, a + b + c, a + b * c, (a + b) * c, a * (b + c), a * b + c];

    return Math.max(...arr);
};
