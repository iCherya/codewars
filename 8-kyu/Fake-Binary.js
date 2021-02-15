/**
 * 8 kyu - Fake Binary
 * https://www.codewars.com/kata/57eae65a4321032ce000002d
 */
const fakeBin = (x) => {
    let result = '';

    for (const char of x) {
        result += char < 5 ? '0' : '1';
    }

    return result;
};
