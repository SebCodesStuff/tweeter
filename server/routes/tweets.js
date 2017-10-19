"use strict";

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const tweetsRoutes  = express.Router();

module.exports = function(DataHelpers) {
  console.log("tweet route loaded");

  tweetsRoutes.get("/", function(req, res) {
    DataHelpers.getTweets().then(tweets => res.json(tweets))
  });

  tweetsRoutes.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now()
    };

    DataHelpers.saveTweet(tweet).then(tweets => res.status(201).send());
    // {
    //   if (err) {
    //     res.status(500).json({ error: err.message });
    //   } else {
    //     res.status(201).send();
    //   }
    // });
  });

  return tweetsRoutes;

}
