const express = require('express');
const app = express();
const cors = require('cors');

const {authorRouter} = require("./routes/author.route");

require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.use("/api/authors", authorRouter);

app.listen(8001, () => console.log("The server is all fired up on port 8001"));