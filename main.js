let quoteData;

let currentQuote = '',
  currentAuthor = '';

  let colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

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

$('.quote-text').animate({ opacity: 0 }, 500, function () {
  $(this).animate({ opacity: 1 }, 500);
  $('#text').text(randomQuote.quote);
});

$('.quote-author').animate({ opacity: 0 }, 500, function () {
  $(this).animate({ opacity: 1 }, 500);
  $('#author').html(randomQuote.author);
});

let color = Math.floor(Math.random() * colors.length);
  $('body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000);
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
}

$(document).ready(function() {
  getAllQuotes().then(() => {
    getQuote();
  });

  $('#new-quote').on('click', getQuote );
})

