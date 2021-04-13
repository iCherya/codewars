/**
 * 8 kyu - Drink about
 * https://www.codewars.com/kata/56170e844da7c6f647000063
 */
const peopleWithAgeDrink = (old) => {
    const result = 'drink ';

    if (old >= 21) return result + 'whisky';
    if (old >= 18) return result + 'beer';
    if (old >= 14) return result + 'coke';

    return result + 'toddy';
};
