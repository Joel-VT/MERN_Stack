const {createAuthor, findAuthors, findAnAuthor, deleteAuthor, updateAuthor} = require("../services/author.service")

module.exports.handleFindAllAuthors = async (req, res) => {
    console.log("controller: handleFindAllAuthors");
    try {
        const allAuthors = await findAuthors();
        return res.json(allAuthors);
    }
    catch(error) {
        return res.status(400).json(error);
    }
};

module.exports.handleFindOneAuthor = async (req, res) => {
    console.log("controller: handleFindOneAuthor");
    try{
        const oneAuthor = await findAnAuthor(req.params.id);
        return res.json(oneAuthor);
    }
    catch(error) {
        return res.status(400).json(error);
    }
};

module.exports.handleCreateNewAuthor = async (req, res) => {
    console.log("controller: handleCreateNewAuthor")
    try {
        const newAuthor = await createAuthor(req.body);
        return res.json(newAuthor);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};

module.exports.handleUpdateAuthor = async (req, res) => {
    console.log("controller: handleUpdateAuthor");
    try {
        const updatedAuthor = await updateAuthor(req.params.id, req.body);
        return res.json(updatedAuthor);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};

module.exports.handleDeleteAuthor = async (req, res) => {
    console.log("controller: handleDeleteAuthor");
    try {
        const deletedAuthor = await deleteAuthor(req.params.id);
        return res.json(deletedAuthor);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};