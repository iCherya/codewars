/**
 * 8 kyu - Powers of 2
 * https://www.codewars.com/kata/57a083a57cb1f31db7000028
 */
const powersOfTwo = (n) => {
    const res = [];

    let i = 0;
    while (i <= n) {
        res.push(2 ** i);
        i++;
    }

    return res;
};
