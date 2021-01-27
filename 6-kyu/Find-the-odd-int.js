/**
 * 6 kyu - Find the odd int
 * https://www.codewars.com/kata/54da5a58ea159efa38000836
 */
const findOdd = (A) => {
    const hash = {};

    for (const number of A) {
        if (!hash[number]) {
            hash[number] = 0;
        }

        hash[number]++;
    }

    for (const key in hash) {
        if (hash[key] % 2 !== 0) return +key;
    }
};
