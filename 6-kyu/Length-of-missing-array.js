/**
 * 6 kyu - Length of missing array
 * https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611
 */
const getLengthOfMissingArray = (arrayOfArrays) => {
    if (!Array.isArray(arrayOfArrays)) return 0;
    if (!arrayOfArrays.length) return 0;

    for (const arr of arrayOfArrays) {
        if (!Array.isArray(arr)) return 0;
    }

    const lengths = arrayOfArrays.map((array) => array.length).sort((a, b) => a - b);

    for (let i = 0, start = lengths[0]; i < lengths[i]; i++, start++) {
        if (start !== lengths[i]) return start;
    }

    return 0;
};
