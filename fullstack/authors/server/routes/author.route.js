const express = require('express');

const AuthorController = require("../controllers/author.controller");

const router = express.Router();

router.post('/', AuthorController.handleCreateNewAuthor);
router.get('/', AuthorController.handleFindAllAuthors);
router.get('/:id', AuthorController.handleFindOneAuthor);
router.delete('/:id', AuthorController.handleDeleteAuthor);
router.put('/:id', AuthorController.handleUpdateAuthor); 

module.exports = {authorRouter: router};