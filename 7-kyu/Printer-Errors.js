/**
 * 7 kyu - Printer Errors
 * https://www.codewars.com/kata/56541980fa08ab47a0000040
 */
const printerError = (s) => {
    let counter = 0;
    const letters = 'nopqrstuvwxyz';

    for (const char of s) {
        if (letters.includes(char)) counter++;
    }

    return `${counter}/${s.length}`;
};
