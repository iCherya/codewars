/**
 * 7 kyu - Basic Calculator
 * https://www.codewars.com/kata/5296455e4fe0cdf2e000059f
 */
const calculate = (num1, operation, num2) => {
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = null;
            break;
    }

    return Number.isFinite(result) ? result : null;
};
