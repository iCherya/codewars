/**
 * 7 kyu - Sum of digits
 * https://www.codewars.com/kata/59cf805aaeb28438fe00001c
 */
const sum = (digits) => {
    if (digits === 0) return '0 = 0';
    if (!digits) return '';

    const leftPart = digits.toString().split('').join(' + ');
    const sum = digits
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);

    return `${leftPart} = ${sum}`;
};
