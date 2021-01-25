/**
 * 7 kyu - Vowel Count
 * https://www.codewars.com/kata/54ff3102c1bad923760001f3
 */
const getCount = (str) => {
    const vowels = /[aeiou]/;

    return str.split(vowels).length - 1;
};
console.log(getCount('abracadabra'));
