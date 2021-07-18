/**
 * 6 kyu - Sum two arrays
 * https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6
 */
const addArrays = (array1, array2) => {
    const arrayToNumber1 = parseInt(array1.join('') || 0);
    const arrayToNumber2 = parseInt(array2.join('') || 0);
    const result = arrayToNumber1 + arrayToNumber2;

    if (result === 0) return [];

    return Math.abs(result)
        .toString()
        .split('')
        .map((s, i) => (i === 0 ? Number(s) * Math.sign(result) : Number(s)));
};
