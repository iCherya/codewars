/**
 * 8 kyu - Evil or Odious
 * https://www.codewars.com/kata/56fcfad9c7e1fa2472000034
 */
const evil = (n) => {
    const binary = n.toString(2);
    const oneCount = (binary.match(/1/g) || []).length;

    return `It's ${oneCount % 2 === 0 ? 'Evil' : 'Odious'}!`;
};
