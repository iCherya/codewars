/**
 * 7 kyu - Parts of a list
 * https://www.codewars.com/kata/56f3a1e899b386da78000732
 */
const partlist = (arr) => {
    const result = [];

    for (let i = 1; i < arr.length; i++) {
        const before = arr.slice(0, i).join(' ');
        const after = arr.slice(i).join(' ');

        result.push([before, after]);
    }

    return result;
};
