/**
 * 7 kyu - Count the Digit
 * https://www.codewars.com/kata/566fc12495810954b1000030
 */
const nbDig = (n, d) => {
    let alDigitsString = '';
    let i = 0;

    while (i <= n) {
        alDigitsString += Math.pow(i, 2);
        i++;
    }

    return alDigitsString.split(d).length - 1;
};
