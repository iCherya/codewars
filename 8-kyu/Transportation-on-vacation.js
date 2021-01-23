/**
 * 8 kyu - Transportation on vacation
 * https://www.codewars.com/kata/568d0dd208ee69389d000016
 */
const rentalCarCost = (days) => {
    let discount = 0;
    const rate = 40;

    if (days >= 7) discount = 50;
    else if (days >= 3) discount = 20;

    return days * rate - discount;
};
