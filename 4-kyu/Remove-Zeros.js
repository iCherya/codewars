/**
 * 4 kyu - Remove Zeros
 * https://www.codewars.com/kata/52aae14aa7fd03d57400058f
 */
const swap = (i, j, arr) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const removeZeros = (array) => {
    let j;
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < array.length - 1; i++) {
            j = i + 1;
            if ((array[i] === 0 || array[i] === '0') && array[j] !== 0 && array[j] !== '0') {
                swap(i, j, array);
                swapped = true;
            }
        }
    }

    return array;
};
