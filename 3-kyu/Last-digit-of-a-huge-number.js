/**
 * 3 kyu - Last digit of a huge number
 * https://www.codewars.com/kata/5518a860a73e708c0a000027
 */
const lastDigit = (xs) =>
    xs.reduceRight((prev, curr, i) => {
        let exp, base;

        if (prev < 4) {
            exp = prev;
        } else {
            exp = (prev % 4) + 4;
        }

        if (i === 0) {
            base = curr % 10;
        } else if (curr < 4) {
            base = curr;
        } else {
            base = (curr % 4) + 4;
        }

        return Math.pow(base, exp);
    }, 1) % 10;
