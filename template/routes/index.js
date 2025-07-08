const baseRoute = "/api"; // Base route for the API

// Import user routes
module.exports = (app) => {
  app.use(`${baseRoute}/users`, require("./user.route"));
};
