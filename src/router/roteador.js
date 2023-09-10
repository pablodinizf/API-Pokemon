const { Router } = require('express');
const { listaPokemons, detalhePokemon } = require('../controllers/controllerGet');

const rotas = Router();

rotas.get('/pokemon', listaPokemons);
rotas.get('/pokemon/:parametro', detalhePokemon);

module.exports = rotas;