/**
 * 6 kyu - Build a pile of Cubes
 * https://www.codewars.com/kata/5592e3bd57b64d00f3000047
 */
const findNb = (m) => {
    let n = 0;

    while (m > 0) {
        n += 1;
        m -= n ** 3;
    }

    return m ? -1 : n;
};
