/**
 * 7 kyu - max diff - easy
 * https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
 */
const maxDiff = (list) => {
    if (!list.length) return 0;

    const min = Math.min(...list);
    const max = Math.max(...list);

    return max - min;
};
