const express = require("express");
const routes = express.Router();
const {
  create,
  read,
  update,
  remove,
} = require("../controllers/user.controller"); // Import user controller functions

// Define routes for user operations
// POST /api/users - Create a new user
routes.post("", create);

// GET /api/users - Read all users
routes.get("", read);

// PUT /api/users/:id - Update a user by ID
routes.put("/:id", update);

// DELETE /api/users/:id - Remove a user by ID
routes.delete("/:id", remove);

module.exports = routes;
