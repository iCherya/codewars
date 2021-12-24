/**
 * 7 kyu - Double Every Other
 * https://www.codewars.com/kata/5809c661f15835266900010a
 */
const doubleEveryOther = (a) => a.map((num, idx) => (idx % 2 ? 2 * num : num));
