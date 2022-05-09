const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
      options: {
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
    useNullAsDefault: true,
  },
});
