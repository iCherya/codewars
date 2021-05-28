/**
 * 8 kyu - ASCII Total
 * https://www.codewars.com/kata/572b6b2772a38bc1e700007a
 */
const uniTotal = (word) => word.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
