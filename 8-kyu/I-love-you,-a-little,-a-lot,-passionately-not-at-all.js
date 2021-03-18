/**
 * 8 kyu - I love you, a little , a lot, passionately ... not at all
 * https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
 */
const howMuchILoveYou = (nbPetals) => {
    const options = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];

    return options[(nbPetals - 1) % options.length];
};
