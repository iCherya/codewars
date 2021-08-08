/**
 * 8 kyu - Configure package json for a node application
 * https://www.codewars.com/kata/5692a582cc22387ccf000017
 */
const configuration = {
    name: 'test',
    version: '1.0.0',
    description: 'test',
    main: 'index.js',
    scripts: {
        test: 'echo "Error: no test specified" && exit 1'
    },
    repository: {
        type: 'git',
        url: 'test'
    },
    keywords: ['test'],
    author: 'test',
    license: 'MIT'
};
