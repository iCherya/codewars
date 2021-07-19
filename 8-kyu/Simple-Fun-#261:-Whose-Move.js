/**
 * 8 kyu - Simple Fun #261: Whose Move
 * https://www.codewars.com/kata/59126992f9f87fd31600009b
 */
const whoseMove = (lastPlayer, win) =>
    // eslint-disable-next-line no-nested-ternary
    win ? lastPlayer : lastPlayer === 'white' ? 'black' : 'white';
