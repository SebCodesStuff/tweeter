"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  console.log("data helper loaded");
  return {
    // Saves a tweet to `db`
    saveTweet: function(tweet) {
    return db.collection("initTweets").insertOne(tweet);
      },

// My throw err below may screw up the function
     getTweets: function (err, tweets) {
       if (err) throw err;
       return db.collection("initTweets").find().toArray();
     }
  };
};
