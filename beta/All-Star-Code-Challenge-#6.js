/**
 * Beta - All Star Code Challenge #6
 * https://www.codewars.com/kata/58641f6eb359c4611c0001f2
 */
function isPalindrome(str) {
    if (typeof str !== 'string') throw new Error();

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
