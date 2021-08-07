/**
 * 8 kyu - How much water do I need?
 * https://www.codewars.com/kata/575fa9afee048b293e000287
 */
const howMuchWater = (water, load, clothes) => {
    if (load * 2 < clothes) return 'Too much clothes';
    if (clothes < load) return 'Not enough clothes';
    return Math.round(water * 1.1 ** Math.abs(load - clothes) * 100) / 100;
};
