const express = require('express');
const app = express();
const cors = require('cors');

const {productRouter} = require("./routes/product.route");

require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
