const {createProduct, findProducts, findAProduct, deleteProduct, updateProduct} = require("../services/product.service")

module.exports.handleFindAllProducts = async (req, res) => {
    console.log("controller: handleFindAllProducts");
    try {
        const allProducts = await findProducts();
        return res.json(allProducts);
    }
    catch(error) {
        return res.status(400).json(error);
    }
};

module.exports.handleFindOneProduct = async (req, res) => {
    console.log("controller: handleFindOneProduct");
    try{
        const oneProduct = await findAProduct(req.params.id);
        return res.json(oneProduct);
    }
    catch(error) {
        return res.status(400).json(error);
    }
};

module.exports.handleCreateNewProduct = async (req, res) => {
    console.log("controller: handleCreateNewProduct")
    try {
        const newProduct = await createProduct(req.body);
        return res.json(newProduct);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};

module.exports.handleUpdateProduct = async (req, res) => {
    console.log("controller: handleUpdateProduct");
    try {
        const updatedProduct = await updateProduct(req.params.id, req.body);
        return res.json(updatedProduct);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};

module.exports.handleDeleteProduct = async (req, res) => {
    console.log("controller: handleDeleteProduct");
    try {
        const deletedProduct = await deleteProduct(req.params.id);
        return res.json(deletedProduct);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};