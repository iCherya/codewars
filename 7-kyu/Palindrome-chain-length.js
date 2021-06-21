/**
 * 7 kyu - Palindrome chain length
 * https://www.codewars.com/kata/525f039017c7cd0e1a000a26
 */
const palindromeChainLength = (n) => {
    const getReversedNumber = (n) => +n.toString().split('').reverse().join('');
    const isPalindrome = (n) => n === getReversedNumber(n);

    let counter = 0;
    while (!isPalindrome(n)) {
        n += getReversedNumber(n);
        counter++;
    }

    return counter;
};
