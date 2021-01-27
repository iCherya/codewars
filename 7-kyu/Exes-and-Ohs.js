/**
 * 7 kyu - Exes and Ohs
 * https://www.codewars.com/kata/55908aad6620c066bc00002a
 */
const XO = (str) => {
    let res = 0;

    for (let i = 0; i < str.length; i++) {
        let l = str[i].toLowerCase();

        if (l === 'x') res++;
        if (l === 'o') res--;
    }

    return res === 0;
};
