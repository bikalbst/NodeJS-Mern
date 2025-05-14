const express = require("express");
const userController = require("../controllers/comment");

const router = express.Router();

// Route to get all users
router
  .get("/", userController.getUsers)
  .get("/:id", userController.getUserById)
  .post("/", userController.postUser);

module.exports = { router };
