/**
 * 7 kyu - Rearange Number to Get its Maximum
 * https://www.codewars.com/kata/563700da1ac8be8f1e0000dc
 */
const maxRedigit = (num) => {
    num = num.toString();
    if (num.length !== 3) return null;

    return +num
        .split('')
        .sort((a, b) => b - a)
        .join('');
};
