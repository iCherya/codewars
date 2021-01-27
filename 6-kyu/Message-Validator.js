/**
 * 6 kyu - Message Validator
 * https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc
 */
const isAValidMessage = (message) => {
    if (message === '') return true;

    let string = message.split(/\d/g);
    let num = message.split(/[a-z]/gi);

    if (num[0] === '' || string[string.length - 1] === '') return false;

    num = num.filter((el) => el !== '');
    string = string.filter((el) => el !== '');

    if (num.length !== string.length) return false;

    for (let i = 0; i < string.length; i++) {
        if (string[i].length !== +num[i]) {
            return false;
        }
    }

    return true;
};
