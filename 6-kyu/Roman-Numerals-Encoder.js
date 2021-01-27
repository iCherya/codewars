/**
 * 6 kyu - Roman Numerals Encoder
 * https://www.codewars.com/kata/51b62bf6a9c58071c600001b
 */
const solution = (num) => {
    const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let res = '';

    while (num > 0) {
        for (let i = 0; i < romans.length; i++) {
            if (num >= numbers[i]) {
                num -= numbers[i];
                res += romans[i];
                break;
            }
        }
    }

    return res;
};
