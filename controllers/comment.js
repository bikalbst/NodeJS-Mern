const fs = require("fs");

// Load data from data.json
const data = JSON.parse(fs.readFileSync("data.json", "utf8")); // Parse JSON
const comments = data.comments || [];

exports.getUsers = (req, res) => {
  res.json(comments); // Return all users
};

exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id, 10); // Convert id to a number
  console.log("Requested ID:", id); // Debugging log
  console.log("Users Array:", comments); // Debugging log

  const comment = comments.find((u) => u.id === id); // Find user by id

  if (!comment) {
    return res.status(404).json({ message: "Comment not found" });
  }

  res.status(200).json(comment);
};

exports.postUser = (req, res) => {
  console.log(req.body);
  comments.push(req.body); // Add new user to the array
  res.json({ type: "post" });
};
