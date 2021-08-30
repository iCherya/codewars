/**
 * 7 kyu - Rotate for a Max
 * https://www.codewars.com/kata/56a4872cbb65f3a610000026
 */
const maxRot = (n) => {
    let nStr = n.toString();
    const candidates = [n];

    for (let i = 0; i <= nStr.length - 1; i++) {
        nStr = nStr.slice(0, i) + nStr.slice(i + 1) + nStr[i];
        candidates.push(+nStr);
    }

    return Math.max(...candidates);
};
