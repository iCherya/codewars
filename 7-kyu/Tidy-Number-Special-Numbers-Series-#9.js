/**
 * 7 kyu - Tidy Number (Special Numbers Series #9)
 * https://www.codewars.com/kata/5a87449ab1710171300000fd
 */
const tidyNumber = (n) => {
    n = n.toString();

    for (let i = 0; i < n.length - 1; i++) {
        if (+n[i] > +n[i + 1]) return false;
    }

    return true;
};
