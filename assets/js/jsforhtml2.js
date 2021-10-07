
var submit = $("#submit");
var userInputCoin=$('')

var results1=[]

var displaySearch = $("#dispy");

var userInputPriceCo = $("");

var userInputPriceCurr = $("");

var userInputCoinGr = $("#user-choice1")
console.log(userInputCoinGr);

// var userInputCurr = $("#user-choice");
// console.log(userInputCurr);
var geckoBase = "https://api.coingecko.com/api/v3/"

"https://api.coingecko.com/api/v3/search/"

//var geckoSearchBase = geckoBase + 

var vanEX =
  "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' +userInputCoinGr + '&to_currency=USD&apikey=OMI2ERRUQEZP3AQO";

var getLocSearch = function(userInputCoinGr) {
    var coinGr=userInputCoinGr.val()

    var locApiUrl = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' +coinGr + '&to_currency=USD&apikey=OMI2ERRUQEZP3AQO'
    console.log(userInputCoinGr)
    fetch(locApiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    displayResults(data,coinGr)
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function(error) {
            alert("Can't connect to the Lords Prayer");
            console.log(error);
        });
};
var displayResults = function(data, query) {
    if (data.length === 0) {
        displaySearch.textContent = 'No Data Found...';
        return;
    } else {
        console.log(data)
      var sp1 = data.FromCurrencyCode;
      console.log(sp1)
  //var sp2 = sp1.sparkline_in_7d;
  //var sp3 = sp2.price;
  //console.log(sp3)

        console.log(query);
        console.log(data);
       
        results1.push(sp3)
        console.log(results1)
        
       }   return;
    } 
    submit.on('click', function(event) {
    event.preventDefault();
    getLocSearch(userInputCoinGr)
  

  })