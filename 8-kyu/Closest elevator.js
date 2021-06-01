/**
 * 8 kyu - Closest elevator
 * https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
 */
const elevator = (left, right, call) =>
    Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
