/**
 * 7 kyu - Basic JS - Calculating averages
 * https://www.codewars.com/kata/529f32794a6db5d32a00071f
 */
Calculator.average = (...arg) =>
    arg.length > 0 ? arg.reduce((acc, curr) => acc + curr, 0) / arg.length : 0;
