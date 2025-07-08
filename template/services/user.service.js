const User = require("../models/user.model"); // Import User model for database operations

// User service for handling user-related operations
// This service interacts with the User model to perform CRUD operations
const create = async (data) => {
  const user = new User(data);
  return await user.save();
};

const read = async () => {
  return await User.find({});
};

const update = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id) => {
  return await User.findByIdAndDelete(id);
};

// Export user service functions
module.exports = {
  create,
  read,
  update,
  remove,
};
