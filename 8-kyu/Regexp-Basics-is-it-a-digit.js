/**
 * 8 kyu - Regexp Basics - is it a digit?
 * https://www.codewars.com/kata/567bf4f7ee34510f69000032
 */
String.prototype.digit = function () {
    return /^\d$/.test(this);
};
