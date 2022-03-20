/**
 * 7 kyu - Dot Calculator
 * https://www.codewars.com/kata/6071ef9cbe6ec400228d9531
 */
const dotCalculator = (equation) => {
  const [first, operation, second] = equation.split(' ');

  const num1 = first.length;
  const num2 = second.length;
  let result;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '//':
      result = num1 / num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }

  return ''.padStart(result, '.');
};
