/**
 * 8 kyu - Power
 * https://www.codewars.com/kata/562926c855ca9fdc4800005b
 */
const numberToPower = (number, power) => {
    let result = 1;
    let i = 0;

    while (i < power) {
        result *= number;
        i++;
    }

    return result;
};
