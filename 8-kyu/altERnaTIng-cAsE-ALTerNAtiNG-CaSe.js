/**
 * 8 kyu - altERnaTIng cAsE <=> ALTerNAtiNG CaSe
 * https://www.codewars.com/kata/56efc695740d30f963000557
 */
String.prototype.toAlternatingCase = function () {
    let result = '';

    for (const char of this) {
        if (char.toLocaleLowerCase() === char) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }

    return result;
};
