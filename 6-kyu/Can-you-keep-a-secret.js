/**
 * 6 kyu - Can you keep a secret?
 * https://www.codewars.com/kata/5351b35ebaeb67f9110012d2
 */
const createSecretHolder = (secret) => {
    return {
        getSecret: () => secret,
        setSecret: (value) => {
            secret = value;
        }
    };
};
