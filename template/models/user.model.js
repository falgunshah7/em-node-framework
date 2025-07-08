const mongoose = require("mongoose"); // Import mongoose for MongoDB object modeling

// Define user schema
const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User); // Export the User model
// This model can be used to interact with the 'users' collection in MongoDB
