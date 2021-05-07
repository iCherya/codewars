/**
 * 8 kyu - simple calculator
 * https://www.codewars.com/kata/5810085c533d69f4980001cf
 */
const calculator = (a, b, sign) => {
    if (typeof a !== 'number' || typeof b !== 'number') return 'unknown value';

    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'unknown value';
    }
};
