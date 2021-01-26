/**
 * 4 kyu - Large Factorials
 * https://www.codewars.com/kata/557f6437bf8dcdd135000010
 */

const add = (num1, num2) => {
    const [str1, str2] = [num1, num2].map((el) => el.split('').reverse().join(''));
    const len = num1.length > num2.length ? num1.length : num2.length;
    const result = [];
    let rest = 0;

    for (let i = 0; i < len; i++) {
        const sum = (+str1[i] || 0) + (+str2[i] || 0) + rest;
        rest = sum > 9 ? Math.floor(sum / 10) : 0;

        result.push(sum % 10);
    }

    if (rest !== 0) {
        result.push(rest);
    }

    return result.reverse().join('');
};

const mult = (n1, n2) => {
    let num1 = n1.split('').reverse(),
        num2 = n2.split('').reverse(),
        base = 10,
        carry = 0,
        value = 0,
        offset = 0,
        total = '0',
        result;

    num1.forEach((digitInNum1) => {
        result = [];

        for (let f = 0; f < offset; f++) {
            result.push('0');
        }

        offset++;

        num2.forEach((digitInNum2) => {
            value = digitInNum1 * parseInt(digitInNum2) + carry;
            carry = Math.floor(value / base);
            let digit = value % base;
            result.push(digit);
        });

        if (carry > 0) result.push(carry);

        carry = 0;

        total = add(result.reverse().join(''), total);
    });

    return total;
};

const factorial = (n) => {
    if (!Number.isInteger(n) || n < 0) return null;
    if (n === 1 || n === 0) return '1';

    let result = '1';

    for (let i = 1; i <= n; i++) {
        result = mult(result, i.toString());
    }

    return result;
};
