/**
 * 8 kyu - Freudian translator
 * https://www.codewars.com/kata/5713bc89c82eff33c60009f7
 */
const toFreud = (s) =>
    s.length > 0
        ? s
              .split(' ')
              .map(() => 'sex')
              .join(' ')
        : '';
