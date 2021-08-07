/**
 * 8 kyu - Coding 3min : Jumping Dutch act
 * https://www.codewars.com/kata/570bcd9715944a2c8e000009
 */
const sc = (floor) => {
    if (floor <= 1) return '';

    const scream = 'Aa~ '.repeat(floor - 1) + 'Pa!';

    return floor < 7 ? scream + ' Aa!' : scream;
};
