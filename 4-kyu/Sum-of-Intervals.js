/**
 * 4 kyu - Sum of Intervals
 * https://www.codewars.com/kata/52b7ed099cdc285c300001cd
 */
const sumIntervals = (intervals) => {
    const set = new Set();

    for (const interval of intervals) {
        for (let i = interval[0]; i < interval[1]; i++) {
            set.add(i);
        }
    }

    return set.size;
};
