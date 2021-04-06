/**
 * 6 kyu - Simple ROT13.5 cypher
 * https://www.codewars.com/kata/5894986e2ddc8f6805000036
 */
const ROT135 = (str) => {
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm5678901234';
    const index = (x) => input.indexOf(x);
    const translate = (x) => (index(x) > -1 ? output[index(x)] : x);

    return str.split('').map(translate).join('');
};
