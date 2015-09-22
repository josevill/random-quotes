$(document).ready(function(){
  $('blockquote').addClass('hiddenB');
})

// Get Quote function
$('#launch').click(function() {
$.ajax({
    url: "http://api.forismatic.com/api/1.0/",
    data: {
          method: 'getQuote',
          format: 'jsonp',
          lang: 'en'
          },
    dataType: 'jsonp',
    jsonp: 'jsonp',

    success: function(data) {
      var $quoteT = $('<p>').text(data.quoteText);

      if(data.quoteAuthor === ""){
          var $quoteA = $('<footer>').text('Unknown');
        } else {
          var $quoteA = $('<footer>').text(data.quoteAuthor);
        }
      var twitText = data.quoteText;
      var $twit_btn = "<a class='btn btn-info btn-xs' href='https://twitter.com/intent/tweet?text=" + twitText + "' target='_blank'>Tweet this</a>";
      
      // Bringing blockquote back to life!
      if($('blockquote').hasClass('hiddenB')){
        $('blockquote').removeClass('hiddenB');
      } 
      $('#info').empty();
      $('#info')
      .append($quoteT)
      .append($quoteA)
      .append($twit_btn);

    },
    type: 'POST'
  });
});