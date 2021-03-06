"use strict";

require('dotenv').config();

// Will attempt to deploy this soon

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = process.env.MONGODB_URI;

// mongodb://Seb:mypassword@ds125555.mlab.com:25555/tweeter123

module.exports = function loadDb(callback) {

  MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
      console.error(`Failed to connect: ${MONGODB_URI}`);
      throw err;
    }

    // ==> We have a connection to the "test-tweets" db,
    //     starting here.
    console.log(`Connected to mongodb: ${MONGODB_URI}`);
    console.log("Mongo db loaded");

    callback(db);
  });
}
