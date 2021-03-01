/**
 * Beta - Two numbers are positive
 * https://www.codewars.com/kata/602db3215c22df000e8544f0
 */
const twoArePositive = (...numbers) => numbers.filter((el) => el > 0).length === 2;
