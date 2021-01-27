/**
 * 6 kyu - Consecutive strings
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e
 */
const longestConsec = (strarr, k) => {
    if (k <= 0 || strarr.length === 0 || k > strarr.length) return '';

    const consecutives = [];

    for (let i = 0; i < strarr.length - k + 1; i++) {
        const concatenated = strarr.slice(i, i + k).join('');

        consecutives.push({
            length: concatenated.length,
            i: i,
            word: concatenated
        });
    }

    consecutives.sort((a, b) => {
        if (a.length < b.length) {
            return 1;
        } else if (a.length > b.length) {
            return -1;
        } else if (a.i < b.i) {
            return -1;
        }
        return 1;
    });

    return consecutives[0].word;
};
