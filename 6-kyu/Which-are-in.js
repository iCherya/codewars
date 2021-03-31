/**
 * 6 kyu - Which are in?
 * https://www.codewars.com/kata/550554fd08b86f84fe000a58
 */
const inArray = (array1, array2) => {
    const res = [];

    for (const el1 of array1) {
        for (const el2 of array2) {
            if (el2.includes(el1) && !res.includes(el1)) res.push(el1);
        }
    }

    return res.sort();
};
