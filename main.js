let quoteData = '';


function getAllQuotes(){
  return $.getJSON('https://gist.githubusercontent.com/riz1-lv/983652a9c4e57c9fa98ab2da0ee86cab/raw/452c7a0732196f993530747331cfae8e659dab6f/quotes.json'),function(jsonQuotes){
    quoteData = JSON.parse(jsonQuotes);
    console.log('quotesData');
    console.log(quotesData);
  }
}

function getRandomQuote(){
  return quoteData.quotes[Math.floor(Math.random() * quoteData.quotes.length)];
}

function getQuote(){

}

$(document).ready(function() {
  getAllQuotes().then(() => {
    getQuote();
  })
  $('#new-quote').on('click', getQuote() );
})