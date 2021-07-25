/**
 * 8 kyu - Blood-Alcohol Content
 * https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8
 */
const bloodAlcoholContent = ({ ounces: o, abv: a }, w, s, t) =>
    +(((o * a * 5.14) / w) * (s === 'male' ? 0.73 : 0.66) - 0.015 * t).toFixed(4);
