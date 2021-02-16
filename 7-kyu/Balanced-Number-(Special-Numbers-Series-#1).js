/**
 * 7 kyu - Balanced Number (Special Numbers Series #1)
 * https://www.codewars.com/kata/5a4e3782880385ba68000018
 */
const balancedNum = (number) => {
    number = number.toString();
    const len = number.length;

    if (len < 3) return 'Balanced';

    const middle = Math.floor(len / 2);
    let left, right;

    if (len % 2 === 0) {
        left = number.slice(0, middle - 1);
    } else {
        left = number.slice(0, middle);
    }
    right = number.slice(middle + 1);

    const sum = (str) =>
        str
            .split('')
            .map(Number)
            .reduce((acc, curr) => acc + curr, 0);

    return sum(left) === sum(right) ? 'Balanced' : 'Not Balanced';
};
