const config = require("./config");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: config.USER,
  host: config.HOST,
  database: "tree_api",
  password: config.PASSWORD,
  port: config.PORT
});

const getPeople = (request, response) => {
  pool.query("SELECT * FROM people ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getPeople
};
