/**
 * 7 kyu - Jumping Number (Special Numbers Series #4)
 * https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed
 */
const jumpingNumber = (n) => {
    const number = n.toString();

    for (let i = 0; i < number.length - 1; i++) {
        if (Math.abs(+number[i + 1] - +number[i]) !== 1) return 'Not!!';
    }

    return 'Jumping!!';
};
