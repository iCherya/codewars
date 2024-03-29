/**
 * 6 kyu - Who likes it?
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362
 */
const likes = (names) => {
    if (names.length === 0) return 'no one likes this';
    if (names.length === 1) return `${names[0]} likes this`;

    const likeText = `like this`;
    if (names.length === 2) return `${names[0]} and ${names[1]} ${likeText}`;
    if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} ${likeText}`;

    return `${names[0]}, ${names[1]} and ${names.length - 2} others ${likeText}`;
};
