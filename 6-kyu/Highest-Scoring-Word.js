/**
 * 6 kyu - Highest Scoring Word
 * https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
 */
const high = (x) => {
    const diff = 'a'.charCodeAt(0) - 1;
    const result = [];

    for (const word of x.split(' ')) {
        let sum = 0;

        for (let i = 0; i < word.length; i++) {
            sum += word.charCodeAt(i) - diff;
        }

        result.push([sum, word]);
    }

    result.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];

        return b[0] - a[0];
    });

    return result[0][1];
};
