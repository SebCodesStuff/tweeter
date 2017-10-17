//This function updates the counter value to show how many characters you
//have left to submit. One problem with this is when you hold a key down it
//only executes after you let go. So then it's not calculating the whole time.
//I could put a conditional on my submit buttonto disallow you to submit a request
//longer than the limit

$( document ).ready(function() {
  $('textarea').on('keyup', function() {
    var counter = $(this).val().length;
    $('.counter').text(140-counter);
    if (counter >= 140) {
      $('.counter').css('color','red')
    } else {
      $('.counter').css('color','black') 
    }
  });
});
