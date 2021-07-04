/**
 * 8 kyu - Training JS #9: loop statement --while and do..while
 * https://www.codewars.com/kata/57216d4bcdd71175d6000560
 */
const padIt = (str, n) => {
    let padToStart = true;

    while (n > 0) {
        if (padToStart) {
            str = '*' + str;
            padToStart = false;
        } else {
            str += '*';
            padToStart = true;
        }

        n -= 1;
    }

    return str;
};
