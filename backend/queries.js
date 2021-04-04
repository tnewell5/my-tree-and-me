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

const updatePerson = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, lifespan, marriages } = request.body;

  pool.query(
    "UPDATE people SET name = $1, lifespan = $2, marriages = $3 WHERE id = $4",
    [name, lifespan, marriages, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(`User modified with ID: ${id}`);
    }
  );
};

module.exports = {
  getPeople,
  updatePerson
};
