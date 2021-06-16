/**
 * 8 kyu - Enumerable Magic #2 - True for Any?
 * https://www.codewars.com/kata/54598e89cbae2ac001001135
 */
const any = (arr, fun) => !!arr.filter(fun).length;
