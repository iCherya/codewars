/**
 * 7 kyu - Identical Elements
 * https://www.codewars.com/kata/583ebb9328a0c034490001ba
 */
const duplicateElements = (m, n) => m.filter((item) => n.includes(item)).length;
