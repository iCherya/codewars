/**
 * 8 kyu - Polish alphabet
 * https://www.codewars.com/kata/57ab2d6072292dbf7c000039
 */
const correctPolishLetters = (string) => {
    const map = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' };

    return string
        .split('')
        .map((char) => map[char] || char)
        .join('');
};
