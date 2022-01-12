const dotenv = require("dotenv");
const env = require("env-var");

dotenv.config({ path: ".env" });

module.exports = {
  database: {
    uri: env.get("MONGO_URI").required().asString(),
  },
};
