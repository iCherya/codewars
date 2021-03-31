/**
 * 7 kyu - Anagram Detection
 * https://www.codewars.com/kata/529eef7a9194e0cbc1000255
 */
const isAnagram = (test, original) => {
    const str1 = test.toLowerCase().split('').sort().join('');
    const str2 = original.toLowerCase().split('').sort().join('');

    return str1 === str2;
};
