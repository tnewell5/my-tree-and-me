const express = require("express");
const app = express();
const PORT = 8080;

app.get("/all", (req, res) => {
  res.json({ hi: "there" });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
