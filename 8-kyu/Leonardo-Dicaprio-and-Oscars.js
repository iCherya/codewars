/**
 * 8 kyu - Leonardo Dicaprio and Oscars
 * https://www.codewars.com/kata/56d49587df52101de70011e4
 */
const leo = (oscar) => {
    if (oscar > 88) return 'Leo got one already!';
    if (oscar === 88) return 'Leo finally won the oscar! Leo is happy';
    if (oscar === 86) return 'Not even for Wolf of wallstreet?!';
    return 'When will you give Leo an Oscar?';
};
