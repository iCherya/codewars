/**
 * 6 kyu - Jokes you've been 'awaiting' for ... promise
 * https://www.codewars.com/kata/5a353a478f27f244a1000076
 */
const sayJoke = (apiUrl, jokeId) => {
    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const joke = data.jokes.find((el) => el.id === jokeId);

            if (joke) {
                return {
                    saySetup: () => joke.setup,
                    sayPunchLine: () => joke.punchLine
                };
            }

            throw new Error(`No jokes found id: ${jokeId}`);
        })
        .catch((error) => {
            throw error instanceof TypeError ? new Error(`No jokes at url: ${apiUrl}`) : error;
        });
};
