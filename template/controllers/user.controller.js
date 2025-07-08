// Import user service
const userService = require("../services/user.service");

// Controller functions for user operations
// Create a new user
const create = async (req, res) => {
  const user = await userService.create(req.body);
  res.status(201).json(user);
};

// Read all users
const read = async (req, res) => {
  const users = await userService.read();
  res.status(200).json(users);
};

// Update a user by ID
const update = async (req, res) => {
  const user = await userService.update(req.params.id, req.body);
  res.status(200).json(user);
};

// Remove a user by ID
const remove = async (req, res) => {
  const user = await userService.remove(req.params.id);
  res.status(200).json(user);
};

// Export controller functions
module.exports = {
  create,
  read,
  update,
  remove,
};
