// Update with your config settings.

module.exports = {
  // update here before you start migrations and seedings to specify where all this stuff is going
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/lambda.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
// all the superfluous stuff below dev deleted