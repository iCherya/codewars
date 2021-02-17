/**
 * 7 kyu - Divide and Conquer
 * https://www.codewars.com/kata/57eaec5608fed543d6000021
 */
const divCon = (x) => {
    const toInteger = (num) => (typeof num === 'string' ? -parseInt(num) : num);

    return x.reduce((acc, curr) => acc + toInteger(curr), 0);
};
