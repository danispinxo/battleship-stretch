"use strict";

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

app.get("/", function(req, res) {

});

app.post("/place/", function(req, res) {
  const placementObject = req.body;
  res.send(placementObject);
});

app.post("/guess/", function(req, res) {
  let guessObject = req.body;
  res.send(guessObject);
});