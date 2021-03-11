/**
 * 5 kyu - Math Issues
 * https://www.codewars.com/kata/5267faf57526ea542e0007fb
 */
Math.round = (number) => {
    if (Number.isInteger(number)) return number;

    const rest = number.toString().split('.')[1];
    const len = rest.length;

    return +rest * 2 >= 10 ** len ? Math.ceil(number) : Math.floor(number);
};

Math.ceil = (number) => {
    const [int, rest] = number.toString().split('.').map(Number);
    if (!rest) return int;
    return int + 1;
};

Math.floor = (number) => +number.toString().split('.')[0];
