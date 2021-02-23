/**
 * 8 kyu - Simple Change Machine
 * https://www.codewars.com/kata/57238766214e4b04b8000011
 */
const changeMe = (moneyIn) => {
    if (moneyIn === '£5') return Array(25).fill('20p').join(' ');
    if (moneyIn === '£2') return Array(10).fill('20p').join(' ');
    if (moneyIn === '£1') return Array(5).fill('20p').join(' ');
    if (moneyIn === '50p') return '20p 20p 10p';
    if (moneyIn === '20p') return '10p 10p';

    return moneyIn;
};
