const express = require('express');

const ProductController = require("../controllers/product.controller");

const router = express.Router();

router.post('/', ProductController.handleCreateNewProduct);
router.get('/', ProductController.handleFindAllProducts);
router.get('/:id', ProductController.handleFindOneProduct);
router.delete('/:id', ProductController.handleDeleteProduct);
router.put('/:id', ProductController.handleUpdateProduct); 

module.exports = {productRouter: router};