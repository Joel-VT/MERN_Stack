const {Joke} = require("../models/jokes.model");

module.exports.createJoke = async (data) => {
    console.log('service: createDestination');
    const joke = await Joke.create(data);
    return joke;
}

module.exports.findJokes = async () => {
    console.log('service: findJokes');
    const allJokes = await Joke.find();
    return allJokes;
}

module.exports.findAJoke = async (id) => {
    console.log('service: findAJoke');
    const joke = await Joke.findById(id);
    return joke;
}


module.exports.updateJoke = async (id, data) => {
    console.log("service: updatejoke");
    const updatedJoke = await Joke.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });
    return updatedJoke;
}

module.exports.deleteJoke = async (id) => {
    console.log("serrvice: deleteJoke");
    const deletedJoke = await Joke.findByIdAndDelete(id);
    return deletedJoke;
}