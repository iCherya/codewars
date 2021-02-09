/**
 * 6 kyu - Pairs of Bears
 * https://www.codewars.com/kata/57d165ad95497ea150000020
 */
const bears = (x, s) => {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        const pair = s.substring(i, i + 2);

        if (pair === '8B' || pair === 'B8') {
            result += pair;
            i++;
        }
    }

    return [result, result.length >= x * 2];
};
