/* eslint-disable no-redeclare */
/**
 * 8 kyu - Be Concise IV - Index of an element in an array
 * https://www.codewars.com/kata/5703c093022cd1aae90012c9
 */
const find = (a, e) => {
    const i = a.indexOf(e);
    return i === -1 ? 'Not found' : i;
};
