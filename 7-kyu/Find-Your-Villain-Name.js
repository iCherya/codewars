/**
 * 7 kyu - Find Your Villain Name
 * https://www.codewars.com/kata/536c00e21da4dc0a0700128b
 */
const getVillainName = (birthday) => {
    const villainMonth = [
        'The Evil',
        'The Vile',
        'The Cruel',
        'The Trashy',
        'The Despicable',
        'The Embarrassing',
        'The Disreputable',
        'The Atrocious',
        'The Twirling',
        'The Orange',
        'The Terrifying',
        'The Awkward'
    ];
    const villainLastDateDigit = [
        'Mustache',
        'Pickle',
        'Hood Ornament',
        'Raisin',
        'Recycling Bin',
        'Potato',
        'Tomato',
        'House Cat',
        'Teaspoon',
        'Laundry Basket'
    ];

    const month = birthday.getMonth();
    const lastDateDigit = birthday.getDate() % 10;

    return villainMonth[month] + ' ' + villainLastDateDigit[lastDateDigit];
};
