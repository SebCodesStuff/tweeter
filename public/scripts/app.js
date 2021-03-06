/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $( document ).ready(() => {

   $('form').submit(function(ev){
     ev.preventDefault();
     var data = $(this).serialize();

    //  Could consider making this in a conditional. Doing this would check to see if
    //  there's linebreaks and would then deny an empty tweet. But would only evaluate
    // if this condition happens that way data could still include line breaks if it's not empty
     var dataNoLineBreaks = data.replace(/[%0D%0A]/g,"")

      if (dataNoLineBreaks === "text=") {
        alert("You're tweet is empty please add some content before you submit")
      }
      else if (data.length >= 151) {
        alert("You're tweet is longer than the character limit")
      } else {
       $.ajax({
         url: '/tweets',
         method: 'POST',
         data: data,
         success: function (data) {
           $("form").trigger('reset');
   // Reloads the page, parameter ensures you reload from server instead of cache  
           location.reload(true);
         }
       })
     }
   });

   function loadTweets() {
     $.ajax({
       url: '/tweets',
       method: 'GET',
       success: function (tweets) {
         renderTweets(tweets);
       }
     })
   };
   loadTweets();

// My compose button toggle

  $(".compose-button").click(function(){
   $(this).toggleClass("toggleButton")
   $("#compose-tweet").slideToggle();
   $("textarea").focus();
  });

});


function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweet) {
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
          <footer class="myFooter">${parseHumanDate(tweet.created_at)} ago
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
    $('#tweets-container').prepend(createdTweet);
  }
};

function parseHumanDate(timeCreated) {
    var created = new Date(timeCreated);
    var seconds = Math.floor((Date.now() - created) / 1000);

    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + ' years';
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + ' months';
    }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + ' days';
    }

    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + ' hours';
    }

    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + ' minutes';
    }

    return Math.floor(seconds) + ' seconds';
}
