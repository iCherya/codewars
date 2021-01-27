/**
 * 6 kyu - Find The Parity Outlier
 * https://www.codewars.com/kata/5526fc09a1bbd946250002dc
 */
const findOutlier = (integers) => {
    const even = [];
    const odd = [];

    for (const number of integers) {
        if (number % 2 === 0) {
            even.push(number);
        } else {
            odd.push(number);
        }
    }

    return even.length === 1 ? even[0] : odd[0];
};
