/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {
 $(".displayed-tweet").hover(function(){
     $(this).find('i').toggle()
 });
});


function createTweetElement(tweet) {
  var $tweet = `
        <header class="container">
          <img class="tweet-img" src=${tweet.user.avatars.small} alt="User Avatar">
          <h2>${tweet.user.name}</h2>
          <p class="right">${tweet.user.handle}</p>
        </header>
          <article class="tweet-body">
              ${tweet.content.text}
          </article>
        <footer>${tweet.created_at}
          <i class="fa fa-flag" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </footer>`
  return $tweet;
}

function renderTweets(tweet) {
  for(var i = 0; i < tweet.length; i++) {
    var createdTweet = createTweetElement(tweet[i])
    $('.new-tweet').append(createdTweet);
  }
};

var tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }]
renderTweets(tweetData);
// $('.new-tweet').append($tweet);
