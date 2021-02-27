/**
 * 7 kyu - Chuck Norris I - Push Ups
 * https://www.codewars.com/kata/570564e838428f2eca001d73
 */
const chuckPushUps = (string) => {
    if (typeof string !== 'string' || string === '') return 'FAIL!!';

    if (/[01]/.test(string))
        return Math.max(
            ...string
                .split(' ')
                .map((val) => val.replace(/[^01]/g, ''))
                .map((val) => parseInt(val, 2))
                .filter((val) => !isNaN(val))
        );

    return 'CHUCK SMASH!!';
};
