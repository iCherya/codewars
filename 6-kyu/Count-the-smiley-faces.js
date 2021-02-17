/**
 * 6 kyu - Count the smiley faces!
 * https://www.codewars.com/kata/583203e6eb35d7980400002a
 */
const countSmileys = (arr) => {
    let counter = 0;
    const validFaces = [
        ':)',
        ';)',
        ':D',
        ';D',
        ':-D',
        ':~D',
        ':-)',
        ':~)',
        ';~D',
        ';~)',
        ';-D',
        ';-)'
    ];

    for (const face of arr) {
        if (validFaces.includes(face)) counter++;
    }

    return counter;
};
