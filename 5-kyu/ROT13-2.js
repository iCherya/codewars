/**
 * 5 kyu - ROT13
 * https://www.codewars.com/kata/52223df9e8f98c7aa7000062
 */
const rot13 = (message) => {
    let ciphered = '';

    for (let i = 0; i < message.length; i++) {
        const letter = message[i];

        if (/[a-zA-Z]/gi.test(letter)) {
            const letterCharcode = letter.charCodeAt();

            const isUpperCase = letterCharcode >= 65 && letterCharcode <= 90;
            const isLowerCase = letterCharcode >= 97 && letterCharcode <= 122;
            let cipheredCharcode = letterCharcode + 13;

            if ((isUpperCase && cipheredCharcode > 90) || (isLowerCase && cipheredCharcode > 122)) {
                cipheredCharcode -= 26;
            }

            ciphered += String.fromCharCode(cipheredCharcode);
        } else {
            ciphered += letter;
        }
    }

    return ciphered;
};
