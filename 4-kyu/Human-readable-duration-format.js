/**
 * 4 kyu - Human readable duration format
 * https://www.codewars.com/kata/52742f58faf5485cae000b9a
 */
const formatDuration = (seconds) => {
    if (seconds === 0) return 'now';

    const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
    const res = [];

    for (const key in time) {
        if (seconds >= time[key]) {
            let value = Math.floor(seconds / time[key]);

            if (value > 1) {
                value += ' ' + key + 's';
            } else {
                value += ' ' + key;
            }
            res.push(value);

            seconds = seconds % time[key];
        }
    }

    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0];
};
