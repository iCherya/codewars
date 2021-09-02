/**
 * 7 kyu - Alphabet war
 * https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
 */
const alphabetWar = (fight) => {
    const leftSide = { w: 4, p: 3, b: 2, s: 1, count: 0 };
    const rightSide = { m: 4, q: 3, d: 2, z: 1, count: 0 };

    for (const char of fight) {
        leftSide.count += leftSide[char] || 0;
        rightSide.count += rightSide[char] || 0;
    }

    if (leftSide.count === rightSide.count) return "Let's fight again!";
    return leftSide.count > rightSide.count ? 'Left side wins!' : 'Right side wins!';
};
