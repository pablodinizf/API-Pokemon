let { listarPokemons, detalharPokemon } = require('../data/bancodedados');

const listaPokemons = async (req, res) => {
    const { numeroPagina } = req.body;

    if (numeroPagina) {
        const pokemons = await listarPokemons(Number(numeroPagina));
        return res.json(pokemons.results);
    }

    const pokemons = await listarPokemons();
    return res.json(pokemons.results);
}

const detalhePokemon = async (req, res) => {
    const { parametro } = req.params;

    try {
        const pokemons = await detalharPokemon(parametro);

        return res.json({
            id: pokemons.id,
            name: pokemons.name,
            height: pokemons.height,
            weight: pokemons.weight,
            base_experience: pokemons.base_experience,
            forms: pokemons.forms,
            abilities: pokemons.abilities,
            species: pokemons.species
        });
    } catch (erro) {
        res.status(404).json(erro);
    }
}

module.exports = {
    listaPokemons,
    detalhePokemon
}