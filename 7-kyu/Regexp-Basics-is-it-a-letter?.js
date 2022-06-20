/**
 * 7 kyu - Regexp Basics - is it a letter?
 * https://www.codewars.com/kata/567de72e8b3621b3c300000b
 */
String.prototype.isLetter = function () {
  const isLetter = /^[a-zA-Z]$/;

  return isLetter.test(this);
};
