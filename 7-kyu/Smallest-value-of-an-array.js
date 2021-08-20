/**
 * 7 kyu - Smallest value of an array
 * https://www.codewars.com/kata/544a54fd18b8e06d240005c0
 */
const min = (arr, toReturn) => {
    const minValue = Math.min(...arr);

    return toReturn === 'value' ? minValue : arr.indexOf(minValue);
};
