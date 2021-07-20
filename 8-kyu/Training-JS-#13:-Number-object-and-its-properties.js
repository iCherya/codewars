/**
 * 8 kyu - Training JS #13: Number object and its properties
 * https://www.codewars.com/kata/5722fd3ab7162a3a4500031f
 */
const whatNumberIsIt = (n) => {
    const text = 'Input number is ';

    if (n === Number.MAX_VALUE) return text + 'Number.MAX_VALUE';
    if (n === Number.MIN_VALUE) return text + 'Number.MIN_VALUE';
    if (n === Number.NEGATIVE_INFINITY) return text + 'Number.NEGATIVE_INFINITY';
    if (n === Number.POSITIVE_INFINITY) return text + 'Number.POSITIVE_INFINITY';
    if (isNaN(n)) return text + 'Number.NaN';

    return text + n;
};
