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

var $tweet = `<header class="container">
          <img class="tweet-img" src=${tweetData.user.avatars.small} alt="User Avatar">
          <h2>${tweetData.user.name}</h2>
          <p class="right">${tweetData.user.handle}</p>
        </header>
          <article class="tweet-body">
              ${tweetData.content.text}
          </article>
        <footer>${tweetData.created_at}
          <i class="fa fa-flag" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </footer>
      `
$('.new-tweet').append($tweet);
}

var tweetData = {
  "user": {
            "name": "Newton",
            "avatars":
              {
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
            }
var $tweet = createTweetElement(tweetData);
console.log($tweet);
$('.new-tweet').append($tweet);
