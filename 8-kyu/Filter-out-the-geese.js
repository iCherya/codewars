/**
 * 8 kyu - Filter out the geese
 * https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
 */
const gooseFilter = (birds) => {
    const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

    return birds.filter((el) => !geese.includes(el));
};
