/**
 * 6 kyu - Highest Rank Number in an Array
 * https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
 */
const highestRank = (arr) => {
    const map = {};

    arr.forEach((number) => {
        if (!map[number]) map[number] = 0;
        map[number] += 1;
    });

    const sorted = Object.entries(map).sort((a, b) => {
        if (b[1] === a[1]) return b[0] - a[0];
        return b[1] - a[1];
    });

    return +sorted[0][0];
};
