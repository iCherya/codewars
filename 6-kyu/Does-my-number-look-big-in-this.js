/**
 * 6 kyu - Does my number look big in this?
 * https://www.codewars.com/kata/5287e858c6b5a9678200083c
 */
const narcissistic = (value) => {
    let result = 0;
    value = value.toString();
    const len = value.length;

    for (const digit of value) {
        result += (+digit) ** len;
    }

    return result === +value;
};
