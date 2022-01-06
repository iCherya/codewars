/**
 * 7 kyu - Alternate case
 * https://www.codewars.com/kata/57a62154cf1fa5b25200031e
 */
const alternateCase = (s) => {
  let result = '';

  for (const char of s) {
    if (char.toLowerCase() === char) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
};
