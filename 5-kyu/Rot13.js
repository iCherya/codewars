/**
 * 5 kyu - Rot13
 * https://www.codewars.com/kata/530e15517bc88ac656000716
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
