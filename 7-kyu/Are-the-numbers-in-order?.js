/**
 * 7 kyu - Are the numbers in order?
 * https://www.codewars.com/kata/56b7f2f3f18876033f000307
 */
const inAscOrder = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) return false;
    }

    return true;
};
