let quoteData;

let currentQuote = '',
  currentAuthor = '';

function getAllQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url:
    'https://gist.githubusercontent.com/riz1-lv/983652a9c4e57c9fa98ab2da0ee86cab/raw/452c7a0732196f993530747331cfae8e659dab6f/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quoteData = JSON.parse(jsonQuotes);
        console.log('quoteData');
        console.log(quoteData);
      }
    }
  });
}
function getRandomQuote(){
  return quoteData.quotes[Math.floor(Math.random() * quoteData.quotes.length)];
}

function getQuote(){
let randomQuote = getRandomQuote();

currentQuote = randomQuote.quote;
currentAuthor = randomQuote.author;

$('#tweet-quote').attr(
  'href',
  'https://twitter.com/intent/tweet?hashtags=quotes&&text=' +
    encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
);

$('#text').text(randomQuote.quote);

$('#author').html(randomQuote.author);
}

$(document).ready(function() {
  getAllQuotes().then(() => {
    getQuote();
  });

  $('#new-quote').on('click', getQuote );
})

 