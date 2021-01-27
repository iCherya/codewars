/**
 * 6 kyu - Tribonacci Sequence
 * https://www.codewars.com/kata/556deca17c58da83c00002db
 */
const tribonacci = (signature, n) => {
    for (let i = 3; i < n; i++) {
        const next = signature[i - 3] + signature[i - 2] + signature[i - 1];
        signature.push(next);
    }

    return signature.slice(0, n);
};
