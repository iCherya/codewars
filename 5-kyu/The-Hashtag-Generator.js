/**
 * 5 kyu - The Hashtag Generator
 * https://www.codewars.com/kata/52449b062fb80683ec000024
 */
const generateHashtag = (str) => {
    const result = str
        .split(' ')
        .reduce((acc, curr) => acc + curr.charAt(0).toUpperCase() + curr.substring(1), '#');

    return result.length <= 1 || result.length > 140 ? false : result;
};
