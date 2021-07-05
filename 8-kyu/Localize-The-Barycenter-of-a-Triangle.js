/**
 * 8 kyu - Localize The Barycenter of a Triangle
 * https://www.codewars.com/kata/5601c5f6ba804403c7000004
 */
const barTriang = (p1, p2, p3) => {
    const [[p1x, p1y], [p2x, p2y], [p3x, p3y]] = [p1, p2, p3];
    const getCenter = (a, b, c) => +((a + b + c) / 3).toFixed(4);

    return [getCenter(p1x, p2x, p3x), getCenter(p1y, p2y, p3y)];
};
