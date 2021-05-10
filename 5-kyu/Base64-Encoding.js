/* eslint-disable no-undef */
/**
 * 5 kyu - Base64 Encoding
 * https://www.codewars.com/kata/5270f22f862516c686000161
 */
String.prototype.toBase64 = function () {
    return Buffer.from(this).toString('base64');
};
String.prototype.fromBase64 = function () {
    return Buffer.from(this, 'base64').toString();
};
