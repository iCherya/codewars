/**
 * 6 kyu - Prefill an Array
 * https://www.codewars.com/kata/54129112fb7c188740000162
 */
const prefill = (n, v) => {
    if (!Number.isInteger(+n) || n < 0 || typeof n === 'boolean') {
        throw new TypeError(`${n} is invalid`);
    }

    return new Array(+n).fill(v);
};
