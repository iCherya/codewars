/**
 * 6 kyu - ROT13 variant cipher
 * https://www.codewars.com/kata/56fb3cde26cc99c2fd000009
 */
const encrypter = (str) => {
    const inputROT13 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const outputROT13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

    const inputOpposite = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const outputOpposite = 'ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba';

    const index = (x, input) => input.indexOf(x);
    const translate = (x, index, input, output) =>
        index(x, input) > -1 ? output[index(x, input)] : x;

    const rot = str
        .split('')
        .map((el) => translate(el, index, inputROT13, outputROT13))
        .join('');

    const opposite = rot
        .split('')
        .map((el) => translate(el, index, inputOpposite, outputOpposite))
        .join('');

    return opposite;
};
