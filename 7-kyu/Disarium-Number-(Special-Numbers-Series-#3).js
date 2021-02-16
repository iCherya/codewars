/**
 * 7 kyu - Disarium Number (Special Numbers Series #3)
 * https://www.codewars.com/kata/5a53a17bfd56cb9c14000003
 */
const disariumNumber = (n) => {
    const str = n.toString();
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        result += Math.pow(str[i], i + 1);
    }

    return result === n ? 'Disarium !!' : 'Not !!';
};
