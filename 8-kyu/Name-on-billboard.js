/**
 * 8 kyu - Name on billboard
 * https://www.codewars.com/kata/570e8ec4127ad143660001fd
 */
const billboard = (name, price = 30) => name.split('').reduce((acc) => acc + price, 0);
