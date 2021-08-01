/**
 * 8 kyu - Training JS #21: Methods of String object--trim() and the string template
 * https://www.codewars.com/kata/5729b103dd8bac11a900119e
 */
const fiveLine = (s) => {
    s = s.trim();
    let str = '';

    for (let i = 1; i <= 5; i++) {
        str += '\n' + s.repeat(i);
    }

    return str.trim();
};
