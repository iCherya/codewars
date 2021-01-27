/**
 * 7 kyu - Sliding Puzzle Verification
 * https://www.codewars.com/kata/5e28b3ff0acfbb001f348ccc
 */
const isSolved = (board) => {
    board = board.flat();

    for (let i = 0; i < board.length; i++) {
        if (board[i] !== i) return false;
    }

    return true;
};
