const { DATABASE_URL, DB_NAME } = process.env; // Load environment variables from .env file
// DATABASE_URL and DB_NAME are expected to be defined in the .env file
const url = DATABASE_URL || `mongodb://127.0.0.1:27017/${DB_NAME || "test"}`; // Fallback to a default MongoDB URL if DATABASE_URL is not set
module.exports = url; // Export the connection URL for use in other parts of the application
// This URL will be used to connect to the MongoDB database
