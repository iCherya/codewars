/**
 * 8 kyu - Return the day
 * https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
 */
const whatday = (num) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if (days[num - 1]) return days[num - 1];

    return 'Wrong, please enter a number between 1 and 7';
};
