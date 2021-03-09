/**
 * 8 kyu - Rock Paper Scissors!
 * https://www.codewars.com/kata/5672a98bdbdd995fad00000f
 */
const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';

    const beats = {
        scissors: 'paper',
        paper: 'rock',
        rock: 'scissors'
    };

    return beats[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!';
};
