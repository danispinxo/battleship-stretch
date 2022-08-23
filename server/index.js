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

  let carrierStart = placementObject['carrier-start'];

  console.log(carrierStart);

});