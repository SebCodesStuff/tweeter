/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $( document ).ready(function() {

   $('form').submit(function(ev){
     ev.preventDefault();
     var data = $(this).serialize();
     console.log(data);
     debugger
     $.ajax({
       url: '/tweets',
       method: 'POST',
       data: data,
       success: function () {
         console.log(data);
       }
     })
   })
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
      "text": "<script>alert('uh oh!');</script>"
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

// Days ago function below....

//
// Date.daysBetween = function( date1, date2 ) {
//
//   // Convert both dates to milliseconds
//   var date2_ms = 1508347599300;
//   var date1_ms = 1461116232227;
//
//   // Calculate the difference in milliseconds
//   var difference_ms = date2_ms - date1_ms;
//   //take out milliseconds
//   difference_ms = difference_ms/1000;
//   var seconds = Math.floor(difference_ms % 60);
//   difference_ms = difference_ms/60;
//   var minutes = Math.floor(difference_ms % 60);
//   difference_ms = difference_ms/60;
//   var hours = Math.floor(difference_ms % 24);
//   var days = Math.floor(difference_ms/24);
//
//   return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
// }
