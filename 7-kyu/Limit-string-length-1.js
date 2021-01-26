/**
 * 7 kyu - Limit string length - 1
 * https://www.codewars.com/kata/5208fc3cb613bc725f000142
 */
const solution = (string, limit) => {
    if (string.length <= limit) return string;

    return string.slice(0, limit) + '...';
};
console.log(solution('Testing String', 3)); //--> 'Tes...'
console.log(solution('Testing String', 8)); //--> 'Testing ...'
console.log(solution('Test', 8)); //--> 'Test'
