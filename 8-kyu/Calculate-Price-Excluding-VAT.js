/**
 * 8 kyu - Calculate Price Excluding VAT
 * https://www.codewars.com/kata/5890d8bc9f0f422cf200006b
 */
const excludingVatPrice = (price) => (price === null ? -1 : +(price / 1.15).toFixed(2));
