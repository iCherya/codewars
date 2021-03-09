/**
 * 8 kyu - Welcome!
 * https://www.codewars.com/kata/577ff15ad648a14b780000e7
 */
const greet = (language) => {
    const db = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso',
        IP_ADDRESS_INVALID: 'Welcome',
        IP_ADDRESS_NOT_FOUND: 'Welcome',
        IP_ADDRESS_REQUIRED: 'Welcome'
    };

    return db[language];
};
