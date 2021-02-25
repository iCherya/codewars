/**
 * 7 kyu - Sum of the first nth term of Series
 * https://www.codewars.com/kata/555eded1ad94b00403000071
 */
const SeriesSum = (n) => {
    if (n === 0) return '0.00';

    let result = 1;
    let divider = 1;

    while (n > 1) {
        divider += 3;
        result += 1 / divider;
        n--;
    }

    return result.toFixed(2);
};
