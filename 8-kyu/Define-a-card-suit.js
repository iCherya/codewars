/**
 * 8 kyu - Define a card suit
 * https://www.codewars.com/kata/5a360620f28b82a711000047
 */
const defineSuit = (card) => {
    const suits = {
        '♣': 'clubs',
        '♠': 'spades',
        '♦': 'diamonds',
        '♥': 'hearts'
    };

    return suits[card.split('').pop()];
};
