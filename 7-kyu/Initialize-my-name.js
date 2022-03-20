/**
 * 7 kyu - Initialize my name
 * https://www.codewars.com/kata/5768a693a3205e1cc100071f
 */
const initializeNames = (name) => {
  const words = name.split(' ');

  if (words.length < 3) return name;

  const firstName = words.shift();
  const lastName = words.pop();
  const middleName = words.map((word) => word.slice(0, 1) + '.');

  return [firstName, ...middleName, lastName].join(' ');
};
