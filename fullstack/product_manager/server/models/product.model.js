const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters long']
        },
        price: {
            type: Number,
            required: [true, '{PATH} is required'],
            min: [0.01, '{PATH} must be atleast {MIN}']
        },
        description: {
            type: String,
            required: [true, '{PATH} is required'],
            minlength: [5, '{PATH} must be atleast {MINLENGTH} characters long']
        }
    }, {timestamps: true}
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = {Product: Product};