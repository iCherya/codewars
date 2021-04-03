/**
 * 8 kyu - Is the string uppercase?
 * https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
 */
String.prototype.isUpperCase = function () {
    return this.toUpperCase() === this.toString();
};
