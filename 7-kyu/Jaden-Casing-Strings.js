/**
 * 7 kyu - Jaden Casing Strings
 * https://www.codewars.com/kata/5390bac347d09b7da40006f6
 */
String.prototype.toJadenCase = function () {
    return this.split(' ')
        .map((el) => el.replace(el.charAt(0), el.charAt(0).toUpperCase()))
        .join(' ');
};
