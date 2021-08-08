/**
 * 8 kyu - Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
 * https://www.codewars.com/kata/5732b0351eb838d03300101d
 */
const blackAndWhite = (arr) => {
    if (!Array.isArray(arr)) return "It's a fake array";

    return arr.includes(5) && arr.includes(13) ? "It's a black array" : "It's a white array";
};
