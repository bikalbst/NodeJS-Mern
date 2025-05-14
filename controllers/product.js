const fs = require("fs");

// Load data from data.json
const data = JSON.parse(fs.readFileSync("data.json", "utf8")); // Parse JSON
const products = data.products || []; // Use the users array as products

exports.getProducts = (req, res) => {
  res.json(products); // Return all products
};

exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id, 10); // Convert id to a number
  console.log("Requested ID:", id); // Debugging log
  console.log("Products Array:", products); // Debugging log

  const product = products.find((p) => p.id === id); // Find product by id

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
};

exports.postProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body); // Add new product to the array
  res.json({ type: "post" });
};
