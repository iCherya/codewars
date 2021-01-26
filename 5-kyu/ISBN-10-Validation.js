/**
 * 5 kyu - ISBN-10 Validation
 * https://www.codewars.com/kata/51fc12de24a9d8cb0e000001
 */
const validISBN10 = (isbn) => {
    if (isbn.length !== 10) return false;

    isbn = isbn.split('');
    if (isbn[9] === 'X') isbn[9] = 10;

    const sum = isbn.reduce((acc, curr, idx) => acc + parseInt(curr) * (idx + 1), 0);

    return sum % 11 === 0;
};
