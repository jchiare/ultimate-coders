const express = require("express");
const app = express();
const port = 3000;

app.get("/spaghetti", (req, res) => {
  res.send("say spaghetti!");
});

app.post("/spaghetti", (req, res) => {
  console.log(req.body);
  res.send("say spaghetti!!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
