/**
 * 7 kyu - Number to digit tiers
 * https://www.codewars.com/kata/586bca7fa44cfc833e00005c
 */
const createArrayOfTiers = (num) => {
    const result = [];
    const digits = num.toString().length;
    let cut = 10 ** (digits - 1);

    while (result.length < digits) {
        const digit = Math.floor(num / cut);
        result.push(digit.toString());
        cut /= 10;
    }

    return result;
};
