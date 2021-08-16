/**
 * 7 kyu - Number Of Occurrences
 * https://www.codewars.com/kata/52829c5fe08baf7edc00122b
 */
Array.prototype.numberOfOccurrences = function (target) {
    return this.filter((el) => el === target).length;
};
