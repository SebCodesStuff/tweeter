//This function updates the counter value to show how many characters you
//have left to submit. One problem with this is when you hold a key down it
//only executes after you let go. So then it's not calculating the whole time.
//I could put a conditional on my submit buttonto disallow you to submit a request
//longer than the limit

$( document ).ready(function() {
  $('textarea[placeholder*="What are you humming about?"]').on('keyup', function() {
    var $charLen = $(this).val().length;
    $('.counter').text(140-$charLen);

    //Changes the color if invalid
    if ($charLen > 140) {
      $(this).siblings('span').addClass('red')
    } else {
      $(this).siblings('span').removeClass('red')
    }
  });
});
