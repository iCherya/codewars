/**
 * 8 kyu - Is there a vowel in there?
 * https://www.codewars.com/kata/57cff961eca260b71900008f
 */
const isVow = (a) =>
    a.map((number) => {
        const letter = String.fromCharCode(number);

        if (['a', 'e', 'i', 'o', 'u'].includes(letter)) return letter;

        return number;
    });
