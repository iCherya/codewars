/**
 * 6 kyu - Dubstep
 * https://www.codewars.com/kata/551dc350bf4e526099000ae5
 */
const songDecoder = (song) =>
    song
        .split('WUB')
        .filter((el) => el !== '')
        .join(' ');
