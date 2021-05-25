/**
 * 8 kyu - Training JS #4: Basic data types--Array
 * https://www.codewars.com/kata/571effabb625ed9b0600107a
 */
const getLength = (arr) => arr.length;
const getFirst = (arr) => arr[0];
const getLast = (arr) => arr[arr.length - 1];
const pushElement = (arr) => {
    arr.push(1);
    return arr;
};
const popElement = (arr) => {
    arr.pop();
    return arr;
};
