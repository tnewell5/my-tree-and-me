const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const PORT = 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/people", db.getPeople);
app.put("/people/:id", db.updatePerson);
app.post("/people", db.createPerson);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
