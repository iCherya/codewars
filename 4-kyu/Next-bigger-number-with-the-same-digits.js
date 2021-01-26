/**
 * 4 kyu - Next bigger number with the same digits
 * https://www.codewars.com/kata/55983863da40caa2c900004e
 */
const nextBigger = (n) => {
    const string = n.toString();
    let j = string.length - 1;
    let i = j - 1;

    while (string[i + 1] <= string[i]) {
        i--;
    }

    if (i === -1) return -1;

    while (string[j] <= string[i]) {
        j--;
    }

    let right = string.slice(i + 1, j) + string[i] + string.slice(j + 1);
    const res = Number(string.slice(0, i) + string[j] + right.split('').reverse().join(''));

    return res;
};
