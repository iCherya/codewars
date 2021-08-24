/**
 * 7 kyu - Basic Sequence Practice
 * https://www.codewars.com/kata/5436f26c4e3d6c40e5000282
 */
const sumOfN = (n) => {
    const sequence = [];
    const sign = Math.sign(n);
    let sum = 0;
    let i = 0;

    while (i <= Math.abs(n)) {
        sequence.push(sum);
        i += 1;
        sum += i * sign;
    }

    return sequence;
};
