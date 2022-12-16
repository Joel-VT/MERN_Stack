const {Author} = require("../models/author.model");

module.exports.createAuthor = async (data) => {
    console.log('service: createAuthor');
    const author = await Author.create(data);
    return author;
}

module.exports.findAuthors = async () => {
    console.log('service: findAuthors');
    const allAuthors = await Author.find().sort({"title": "asc"});
    return allAuthors;
}

module.exports.findAnAuthor = async (id) => {
    console.log('service: findAnAuthor');
    const author = await Author.findById(id);
    return author;
}

module.exports.updateAuthor = async (id, data) => {
    console.log("service: updateAuthor");
    const updatedAuthor = await Author.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });
    return updatedAuthor;
}

module.exports.deleteAuthor = async (id) => {
    console.log("serrvice: deleteAuthor");
    const deletedAuthor = await Author.findByIdAndDelete(id);
    return deletedAuthor;
}