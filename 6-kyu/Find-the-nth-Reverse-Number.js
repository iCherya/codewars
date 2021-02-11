/**
 * 6 kyu - Find the nth Reverse Number
 * https://www.codewars.com/kata/600bfda8a4982600271d6069
 */
const findReverseNumber = (n) => {
    let i, j;
    const numberChars = [...n.toString()];
    const numberLength = numberChars.length;

    if (numberLength === 1) {
        numberChars[0] -= 1;
    } else if (numberChars[0] === '1' && numberChars[1] === '0') {
        numberChars[0] = ' ';
        numberChars[1] = '9';
        for (j = numberLength, i = numberLength - 2; i >= 1; i--, j++) {
            numberChars[j] = numberChars[i];
        }
    } else if (numberChars[0] === '1') {
        numberChars[0] = ' ';
        for (j = numberLength, i = numberLength - 1; i >= 1; i--, j++) {
            numberChars[j] = numberChars[i];
        }
    } else {
        numberChars[0] -= 1;
        for (j = numberLength, i = numberLength - 2; i >= 0; i--, j++) {
            numberChars[j] = numberChars[i];
        }
    }

    return parseInt(numberChars.join(''));
};
