/**
 * 6 kyu - Split Strings
 * https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
 */
const solution = (str) => {
    const result = [];
    if (str.length === 0) return result;

    for (let i = 0; i < str.length; i += 2) {
        result.push(str.slice(i, i + 2));
    }

    let last = result.pop();
    if (last.length === 1) last += '_';
    result.push(last);

    return result;
};
