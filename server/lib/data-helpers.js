"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  console.log("data helper loaded");
  return {
    // Saves a tweet to `db`
    saveTweet: function(tweet) {
    return db.collection("initTweets").insertOne(tweet);
        // if (err) {
        //   console.log("db object?: ",db.collection("initTweets"));
        //   return callback(err);
        // }
        // console.log(tweets);


    },

     getTweets: function (tweets) {

       return db.collection("initTweets").find().toArray();
      // if (err) throw err;
      //
      // console.log(("Logging each tweet:"));
      // for (let tweet of tweets) {
      //   console.log(tweet);
      // }
     }
  };
};
