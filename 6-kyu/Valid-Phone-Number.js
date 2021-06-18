/**
 * 6 kyu - Valid Phone Number
 * https://www.codewars.com/kata/525f47c79f2f25a4db000025
 */
const validPhoneNumber = (phoneNumber) => /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
