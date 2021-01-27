/**
 * 6 kyu - Find the unique number
 * https://www.codewars.com/kata/585d7d5adb20cf33cb000235
 */
const findUniq = (arr) => {
    const map = {};

    for (const el of arr) {
        if (!map[el]) map[el] = 0;
        map[el]++;
    }

    for (const key in map) {
        if (map[key] === 1) return +key;
    }
};
