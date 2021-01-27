/**
 * 6 kyu - Stop gninnipS My sdroW!
 * https://www.codewars.com/kata/5264d2b162488dc400000001
 */
const spinWords = (s) => {
    const arr = s.split(' ');

    const result = [];
    for (let item of arr) {
        if (item.length > 4) {
            result.push(item.split('').reverse().join(''));
        } else {
            result.push(item);
        }
    }

    return result.join(' ');
};
