/**
 * 8 kyu - NBA full 48 minutes average
 * https://www.codewars.com/kata/587c2d08bb65b5e8040004fd
 */
const pointsPer48 = (ppg, mpg) => {
    if (mpg === 0) return 0;
    return Math.round((ppg / mpg) * 480) / 10;
};
