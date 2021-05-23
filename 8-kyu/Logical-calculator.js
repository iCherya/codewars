/**
 * 8 kyu - Logical calculator
 * https://www.codewars.com/kata/57096af70dad013aa200007b
 */
const logicalCalc = (array, op) => {
    if (op === 'AND') return array.reduce((a, c) => a && c);
    if (op === 'OR') return array.reduce((a, c) => a || c);
    if (op === 'XOR') return !!array.reduce((a, c) => a ^ c);
};
