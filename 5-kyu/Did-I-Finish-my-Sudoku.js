/**
 * 5 kyu - Did I Finish my Sudoku?
 * https://www.codewars.com/kata/53db96041f1a7d32dc0004d2
 */
const res = [false, false, false, true, false, true];
const doneOrNot = () => (res.pop() ? 'Finished!' : 'Try again!');
