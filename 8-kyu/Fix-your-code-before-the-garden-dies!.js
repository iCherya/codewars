/**
 * 8 kyu - Fix your code before the garden dies!
 * https://www.codewars.com/kata/57158fb92ad763bb180004e7
 */
const rainAmount = (mm) =>
    mm < 40
        ? `You need to give your plant ${40 - mm}mm of water`
        : 'Your plant has had more than enough water for today!';
