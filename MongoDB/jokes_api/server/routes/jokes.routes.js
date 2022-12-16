const express = require('express');

const JokeController = require("../controllers/jokes.controller");

const router = express.Router();

router.post('/', JokeController.handleCreateNewJoke);
router.get('/', JokeController.handleFindAllJokes);
router.get('/:id', JokeController.handleFindOneJoke);
router.delete('/:id', JokeController.handleDeleteJoke);
router.put('/:id', JokeController.handleUpdateJoke); 

module.exports = {jokeRouter: router};