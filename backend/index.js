const express = require("express");
const app = express();
const db = require("./queries");
const PORT = 8080;

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/people", db.getPeople);

app.get("/all", (req, res) => {
  res.json({ hi: "there" });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
