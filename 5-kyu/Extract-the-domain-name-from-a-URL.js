/**
 * 5 kyu - Extract the domain name from a URL
 * https://www.codewars.com/kata/514a024011ea4fb54200004b
 */
const domainName = (url) => {
    let arr = url.split('//');

    if (arr[0] === 'https:' || arr[0] === 'http:') {
        url = arr[1];
    }

    arr = url.split('.');

    return arr[0] === 'www' ? arr[1] : arr[0];
};
