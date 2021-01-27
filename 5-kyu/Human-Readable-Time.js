/**
 * 5 kyu - Human Readable Time
 * https://www.codewars.com/kata/52685f7382004e774f0001f7
 */
const humanReadable = (seconds) => {
    const hh = Math.floor(seconds / 3600);
    const hhRemain = seconds % 3600;
    const mm = Math.floor(hhRemain / 60);
    const ss = hhRemain % 60;

    const f = (n) => n.toString().padStart(2, '0');
    return `${f(hh)}:${f(mm)}:${f(ss)}`;
};
