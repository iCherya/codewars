/**
 * 6 kyu - Your order, please
 * https://www.codewars.com/kata/55c45be3b2079eccff00010f
 */
const order = (words) =>
    words
        .split(' ')
        .sort((a, b) => a.replace(/\D/g, '') - b.replace(/\D/g, ''))
        .join(' ');
