// Get Quote function
// onClick function for the main button.
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
        // If success, then save data from JSON to some variables for further usage.
        success: function(data) {
           var $quoteT = $('<p>').text(data.quoteText);
             // Sometimes, the Author of a quote is unknown wether by the API or simply unknown
             // Then we check it out, if it's unknown, set the variable to unknown, instead of showing an empty space.
             if(data.quoteAuthor === ""){
              var $quoteA = $('<footer>').text('Unknown');
             } else {
              var $quoteA = $('<footer>').text(data.quoteAuthor);
             }
           // Cleaning up the mess before we get some weird stacking right there.
           $('#info').empty();
           $('#info')
              .append($quoteT)
              .append($quoteA);
        },
        type: 'POST'
     });
  });