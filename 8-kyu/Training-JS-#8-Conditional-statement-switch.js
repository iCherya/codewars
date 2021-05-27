/**
 * 8 kyu - Training JS #8: Conditional statement--switch
 * https://www.codewars.com/kata/572059afc2f4612825000d8a
 */
const howManydays = (month) => {
    switch (month) {
        case 2:
            return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
};
