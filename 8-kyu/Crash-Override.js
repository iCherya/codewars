/**
 * 8 kyu - Crash Override
 * https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
 */
const aliasGen = (fName, sName) => {
    fName = fName.toUpperCase();
    sName = sName.toUpperCase();

    if (/^[^A-Z]/.test(fName) || /^[^A-Z]/.test(sName)) {
        return 'Your name must start with a letter from A - Z.';
    }

    // eslint-disable-next-line no-undef
    return `${firstName[fName.charAt(0)]} ${surname[sName.charAt(0)]}`;
};
