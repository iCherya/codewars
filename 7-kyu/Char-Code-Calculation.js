/**
 * 7 kyu - Char Code Calculation
 * https://www.codewars.com/kata/57f75cc397d62fc93d000059
 */
const calc = (x) => {
    let strNum = '';

    for (const char of x) {
        strNum += char.charCodeAt(0);
    }

    const sevenMatches = strNum.match(/7/g) || [];

    return sevenMatches.length * 6;
};
