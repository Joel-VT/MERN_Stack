const {createJoke, findJokes, findAJoke, deleteJoke, updateJoke} = require("../services/jokes.service")

module.exports.handleFindAllJokes = async (req, res) => {
    console.log("controller: handleFindAllJokes");
    try {
        const allJokes = await findJokes();
        return res.json(allJokes);
    }
    catch(error) {
        return res.status(400).json(error);
    }
};

module.exports.handleFindOneJoke = async (req, res) => {
    console.log("controller: handleFindOneJoke");
    try{
        const oneJoke = await findAJoke(req.params.id);
        return res.json(oneJoke);
    }
    catch(error) {
        return res.status(400).json(error);
    }
};

module.exports.handleCreateNewJoke = async (req, res) => {
    console.log("controller: handleCreateNewJoke")
    try {
        const newJoke = await createJoke(req.body);
        return res.json(newJoke);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};

module.exports.handleUpdateJoke = async (req, res) => {
    console.log("controller: handleUpdateJoke");
    try {
        const updatedJoke = await updateJoke(req.params.id, req.body);
        return res.json(updatedJoke);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};

module.exports.handleDeleteJoke = async (req, res) => {
    console.log("controller: handleUpdateJoke");
    try {
        const deletedJoke = await deleteJoke(req.params.id);
        return res.json(deletedJoke);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};