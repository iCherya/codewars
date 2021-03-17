/**
 * 8 kyu - Correct the mistakes of the character recognition software
 * https://www.codewars.com/kata/577bd026df78c19bca0002c0
 */
const correct = (string) => {
    let fixed = '';
    const map = {
        5: 'S',
        1: 'I',
        0: 'O'
    };

    for (let i = 0; i < string.length; i += 1) {
        const char = string[i];
        if (map[char]) fixed += map[char];
        else fixed += char;
    }

    return fixed;
};
