/**
 * 7 kyu - Double Sort
 * https://www.codewars.com/kata/57cc79ec484cf991c900018d
 */
const dbSort = (array) => {
    const numbers = array.filter((el) => typeof el === 'number').sort((a, b) => a - b);
    const strings = array.filter((el) => typeof el === 'string').sort();

    return [...numbers, ...strings];
};
