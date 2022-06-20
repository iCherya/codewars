/**
 * 8 kyu - Check same case
 * https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
 */
const sameCase = (a, b) => {
  const lowerCase = /[a-z]/;
  const upperCase = /[A-Z]/;
  const notLetter = /[^a-zA-Z]/;

  if (notLetter.test(a) || notLetter.test(b)) return -1;

  return Number(
    (lowerCase.test(a) && lowerCase.test(b)) || (upperCase.test(a) && upperCase.test(b))
  );
};
