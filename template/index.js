require("dotenv").config(); // Load environment variables from .env file
const express = require("express"); // Import express framework
const bodyParser = require("body-parser"); // Import body-parser middleware to parse request bodies
const app = express(); // Create an instance of express application
const cors = require("cors"); // Import CORS middleware to enable Cross-Origin Resource Sharing
const { PORT } = process.env; // Get the PORT from environment variables

require("./db/config"); // Import database configuration

app.use(cors()); // Use CORS middleware to allow cross-origin requests

app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies (form submissions)

app.use(bodyParser.json()); // Parse JSON bodies (API requests)

require("./routes/index")(app); // Import and use routes defined in the routes directory

// Define a simple route for testing
// This will respond with a JSON message when the root URL is accessed
app.get("/", (req, res) => {
  res.json({ message: "em-node-framework is up and running" });
});

// Start the server and listen on the specified PORT or default to 8000
// This will log a message to the console when the server is running
app.listen(PORT || 8000, () => {
  console.log(`Server is listening on port ${PORT || 8000}`);
});

module.exports = app; // Export the app instance for testing or further configuration
// This allows the app to be imported in other files, such as test files or additional configuration
