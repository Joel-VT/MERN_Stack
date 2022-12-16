const express = require('express');
const cors = require('cors');
const app = express();

const {jokeRouter} = require("./routes/jokes.routes");

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }, cors()));

app.use("/api/jokes", jokeRouter);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));