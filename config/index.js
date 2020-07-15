// third
const db = require("./database");
const { PORT, MONGODB_URI_LOCAL } = require("./environment");

module.exports = {
  db,
  PORT,
  MONGODB_URI_LOCAL,
};
