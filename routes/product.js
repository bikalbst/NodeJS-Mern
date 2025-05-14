const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

// Route to get all products
router.get("/", productController.getProducts);

// Route to get a product by ID
router.get("/:id", productController.getProductById);

// Route to add a new product
router.post("/", productController.postProduct);

module.exports = { router };
