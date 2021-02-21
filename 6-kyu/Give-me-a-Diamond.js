/**
 * 6 kyu - Give me a Diamond
 * https://www.codewars.com/kata/5503013e34137eeeaa001648
 */
const diamond = (n) => {
    let diam = '';

    if (n < 0 || n % 2 === 0) return null;

    for (let i = 1; i <= n; i += 2) {
        diam += ' '.repeat(Math.floor((n - i) / 2)) + '*'.repeat(i) + '\n';
    }

    for (let i = n - 2; i >= 1; i -= 2) {
        diam += ' '.repeat(Math.floor((n - i) / 2)) + '*'.repeat(i) + '\n';
    }

    return diam;
};
