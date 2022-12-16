const {Product} = require("../models/product.model");

module.exports.createProduct = async (data) => {
    console.log('service: createProduct');
    const product = await Product.create(data);
    return product;
}

module.exports.findProducts = async () => {
    console.log('service: findProducts');
    const allProducts = await Product.find().sort({"title": "asc"});
    return allProducts;
}

module.exports.findAProduct = async (id) => {
    console.log('service: findAProduct');
    const product = await Product.findById(id);
    return product;
}

module.exports.updateProduct = async (id, data) => {
    console.log("service: updateProduct");
    const updatedProduct = await Product.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });
    return updatedProduct;
}

module.exports.deleteProduct = async (id) => {
    console.log("serrvice: deleteProduct");
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
}