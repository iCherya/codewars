/**
 * 8 kyu - Who is going to pay for the wall?
 * https://www.codewars.com/kata/58bf9bd943fadb2a980000a7
 */
const whoIsPaying = (name) => (name.length > 2 ? [name, name.slice(0, 2)] : [name]);
