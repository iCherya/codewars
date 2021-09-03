/**
 * 7 kyu - Counting Array Elements
 * https://www.codewars.com/kata/5569b10074fe4a6715000054
 */
const count = (array) =>
    array.reduce((acc, curr) => {
        if (!acc[curr]) acc[curr] = 0;
        acc[curr] += 1;

        return acc;
    }, {});
