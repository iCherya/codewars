/**
 * 7 kyu - Row Weights
 * https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
 */
const rowWeights = (array) => {
    let left = 0;
    let right = 0;

    array.forEach((item, idx) => {
        if (idx % 2) right += item;
        else left += item;
    });

    return [left, right];
};
