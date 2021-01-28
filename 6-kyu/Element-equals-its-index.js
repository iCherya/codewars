/**
 * 6 kyu - Element equals its index
 * https://www.codewars.com/kata/5b7176768adeae9bc9000056
 */
const indexEqualsValue = (a) => {
    let left = 0;
    let right = a.length - 1;
    let result = -1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (a[middle] === middle) result = middle;
        if (a[middle] >= middle) right = middle - 1;
        else left = middle + 1;
    }

    return result;
};
