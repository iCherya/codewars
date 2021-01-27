/**
 * 6 kyu - Are they the "same"?
 * https://www.codewars.com/kata/550498447451fbbd7600041c
 */
const comp = (array1, array2) => {
    if (!array1 || !array2) return false;

    for (const array of [array1, array2]) {
        array.sort((a, b) => a - b);
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] ** 2 !== array2[i]) {
            return false;
        }
    }

    return true;
};
