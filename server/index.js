"use strict";

// Basic express setup:

// I need to make a request to the html page, I think that's the problem

const PORT          = 8080;

const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const loadDb        = require('./lib/mongo_db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Calls the mongo db asynchronously
loadDb(function (db) {
  console.log("server loaded");

  const DataHelpers = require("./lib/data-helpers.js")(db);

  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});
