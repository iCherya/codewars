/**
 * 8 kyu - Generate user links
 * https://www.codewars.com/kata/57037ed25a7263ac35000c80
 */
const generateLink = (user) => `http://www.codewars.com/users/${encodeURIComponent(user)}`;
