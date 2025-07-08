const mongoose = require("mongoose"); // Import mongoose for MongoDB object modeling
const url = require("./connection-url"); // Import the connection URL from the connection-url module

mongoose.Promise = global.Promise; // Use global Promise for mongoose

mongoose
  .connect(url, {
    useNewUrlParser: true, // Use the new URL parser
  })
  .then(() => {
    console.log("Databse Connected Successfully!!"); // Log success message when connected to the database
  })
  .catch((err) => {
    console.log("Could not connect to the database", err); // Log error message if connection fails
    process.exit(); // Exit the process if connection fails
  });
