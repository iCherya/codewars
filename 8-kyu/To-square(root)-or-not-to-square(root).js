/**
 * 8 kyu - To square(root) or not to square(root)
 * https://www.codewars.com/kata/57f6ad55cca6e045d2000627
 */
const squareOrSquareRoot = (array) =>
    array.map((val) => (Number.isInteger(val ** 0.5) ? val ** 0.5 : val ** 2));
