/**
 * 8 kyu - Grasshopper - Terminal game combat function
 * https://www.codewars.com/kata/586c1cf4b98de0399300001d
 */
const combat = (health, damage) => (health < damage ? 0 : health - damage);
