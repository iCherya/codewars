/**
 * 7 kyu - Sorted? yes? no? how?
 * https://www.codewars.com/kata/580a4734d6df748060000045
 */
const isSortedAndHow = (array) => {
    if ([...array].sort((a, b) => a - b).join('') === array.join('')) return 'yes, ascending';
    if ([...array].sort((a, b) => b - a).join('') === array.join('')) return 'yes, descending';
    return 'no';
};
