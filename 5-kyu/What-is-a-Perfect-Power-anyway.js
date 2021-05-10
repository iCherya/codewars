/**
 * 5 kyu - What's a Perfect Power anyway?
 * https://www.codewars.com/kata/54d4c8b08776e4ad92000835
 */
const isPP = (n) => {
    for (let x = 2; x <= Math.sqrt(n); x++) {
        for (let y = 2; y <= Math.sqrt(n) + 1; y++) {
            if (n === x ** y) return [x, y];
            if (n === y ** x) return [y, x];
        }
    }

    return null;
};
