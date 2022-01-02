/**
 * 7 kyu - Product Array (Array Series #5)
 * https://www.codewars.com/kata/5a905c2157c562994900009d/
 */
const productArray = (numbers) => {
  const product = numbers.reduce((a, c) => a * c, 1);
  return numbers.map((el) => product / el);
};
