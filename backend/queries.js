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

// TODO
const createPerson = (request, response) => {
  const { name, stylingClass, lifespan, marriages } = request.body;

  //   pool.query(
  //     "UPDATE people SET name = $1, lifespan = $2, marriages = $3 WHERE id = $4",
  //     [name, lifespan, marriages, id],
  //     (error, results) => {
  //       if (error) {
  //         throw error;
  //       }
  //       response.status(200).json(`User modified with ID: ${id}`);
  //     }
  //   );
  pool.query(
    "INSERT INTO people (name, class, lifespan, marriages) VALUES ($1, $2, $3, $4)",
    [name, stylingClass, lifespan, marriages],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).json(`User added with ID: ${result.insertId}`);
    }
  );
};

module.exports = {
  getPeople,
  updatePerson,
  createPerson
};
