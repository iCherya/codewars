/**
 * 6 kyu - zipWith
 * https://www.codewars.com/kata/5825792ada030e9601000782
 */
const zipWith = (fn, a0, a1) => {
    const result = [];
    const len = Math.min(a0.length, a1.length);

    for (let i = 0; i < len; i++) {
        const arr1el = a0[i];
        const arr2el = a1[i];

        result.push(fn(arr1el, arr2el));
    }

    return result;
};
