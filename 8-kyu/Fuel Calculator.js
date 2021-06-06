/**
 * 8 kyu - Fuel Calculator
 * https://www.codewars.com/kata/57b58827d2a31c57720012e8
 */
const fuelPrice = (litres, pricePerLitre) => {
    const discount = litres * Math.min(Math.floor(litres / 2) * 0.05, 0.25);
    return (litres * pricePerLitre - discount).toFixed(2);
};
