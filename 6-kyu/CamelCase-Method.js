/**
 * 6 kyu - CamelCase Method
 * https://www.codewars.com/kata/587731fda577b3d1b0001196
 */
String.prototype.camelCase = function () {
    if (this.trim().length === 0) return '';

    return this.trim()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join('');
};
