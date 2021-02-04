/**
 * 8 kyu - String repeat
 * https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
 */
const repeatStr = (n, s) => {
    let res = '';

    while (n > 0) {
        res += s;
        n--;
    }

    return res;
};
