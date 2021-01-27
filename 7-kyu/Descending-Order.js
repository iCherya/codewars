/**
 * 7 kyu - Descending Order
 * https://www.codewars.com/kata/5467e4d82edf8bbf40000155
 */
const descendingOrder = (n) =>
    parseInt(
        n
            .toString()
            .split('')
            .map(Number)
            .sort((a, b) => b - a)
            .join('')
    );
