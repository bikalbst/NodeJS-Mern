const express = require("express");
const morgan = require("morgan");
const { json } = require("stream/consumers");
const productController = require("./controllers/product");
const server = express();
const productRouter = require("./routes/product");
const commentRouter = require("./routes/comment");

//body parser
server.use(express.json()); // Parse JSON bodies

server.use(morgan("dev")); // Morgan logs requests
server.use("/products", productRouter.router);
server.use("/comments", commentRouter.router);

server.listen(8080, () => {
  console.log("Server started");
});
