/**
 * 6 kyu - Hamming Distance
 * https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69
 */
const hamming = (str1, str2) => {
  let counter = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) counter += 1;
  }

  return counter;
};
