/**
 * 8 kyu - UEFA EURO 2016
 * https://www.codewars.com/kata/57613fb1033d766171000d60
 */
const uefaEuro2016 = (teams, scores) => {
    const result = `At match ${teams[0]} - ${teams[1]}, `;
    let winner = 'teams played draw.';

    if (scores[0] > scores[1]) {
        winner = `${teams[0]} won!`;
    }

    if (scores[0] < scores[1]) {
        winner = `${teams[1]} won!`;
    }

    return result + winner;
};
