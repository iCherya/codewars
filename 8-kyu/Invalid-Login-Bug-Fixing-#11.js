/* eslint-disable no-undef */
/**
 * 8 kyu - Invalid Login - Bug Fixing #11
 * https://www.codewars.com/kata/55e4c52ad58df7509c00007e
 */
const validate = (username, password) => {
    const isInjected = (string) => string.includes('||') || string.includes('//');
    if (isInjected(username) || isInjected(password)) return 'Wrong username or password!';

    const database = new Database();
    return database.login(username, password);
};
