/**
 * 8 kyu - Find the Difference in Age between Oldest and Youngest Family Members
 * https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
 */
const differenceInAges = (ages) => {
    ages.sort((a, b) => a - b);

    const youngest = ages[0];
    const oldest = ages[ages.length - 1];
    const diff = oldest - youngest;

    return [youngest, oldest, diff];
};
