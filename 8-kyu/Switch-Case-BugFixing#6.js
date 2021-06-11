/**
 * 8 kyu - Switch/Case - Bug Fixing #6
 * https://www.codewars.com/kata/55c933c115a8c426ac000082
 */
const evalObject = (value) => {
    switch (value.operation) {
        case '+':
            return value.a + value.b;
        case '-':
            return value.a - value.b;
        case '/':
            return value.a / value.b;
        case '*':
            return value.a * value.b;
        case '%':
            return value.a % value.b;
        case '^':
            return Math.pow(value.a, value.b);
        default:
            return;
    }
};
