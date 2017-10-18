/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $( document ).ready(function() {

   $('form').submit(function(ev){
     ev.preventDefault();
     var data = $(this).serialize();
     $.ajax({
       url: '/tweets',
       method: 'POST',
       data: data,
       success: function () {
         console.log(data);
       }
     })
   }),

   function loadTweets() {

   }

  });


function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweet) {
  var postDate =new Date(tweet.created_at);

  var safeHTML = `<p>${escape(tweet.content.text)}</p>`;

  var $tweet = `
      <article class="container displayed-tweet">
          <header class="container">
            <img class="tweet-img" src=${tweet.user.avatars.small} alt="User Avatar">
            <h2>${tweet.user.name}</h2>
            <p class="right">${tweet.user.handle}</p>
          </header>
            <div class="tweet-body">
                ${safeHTML}
            </div>
          <footer>${postDate}
            <i class="fa fa-flag" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
          </footer>
        </article>`
  return $tweet;
}

function renderTweets(tweet) {
  for(var i = 0; i < tweet.length; i++) {
    var createdTweet = createTweetElement(tweet[i])
    $('#tweets-container').append(createdTweet);
  }
};

renderTweets(tweetData);
// $('.new-tweet').append($tweet);
