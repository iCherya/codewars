/**
 * 5 kyu - Tic-Tac-Toe Checker
 * https://www.codewars.com/kata/525caa5c1bf619d28c000335
 */
function isSolved(board) {
    board = board.reduce((acc, curr) => acc.concat(curr), []);

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    if (board.includes(0)) return -1;

    return 0;
}
