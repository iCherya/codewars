/**
 * 8 kyu - Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
 * https://www.codewars.com/kata/57277a31e5e51450a4000010
 */
const firstToLast = (str, c) => {
    const first = str.indexOf(c);
    const last = str.lastIndexOf(c);

    if (first === -1) return -1;
    return last - first;
};
