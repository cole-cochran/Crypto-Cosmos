var submit=$('#submit')
//'use strict';
//var request = require('request');
//MAY EXCCED ALPHA VANTAGE LIMIT-----LMAO "MAY"

//https://api.coingecko.com/api/v3/
//BASE FOR COINGECKO  ^^^^^^
//MAY HAVE TO USE THIS WHILE TESTING OR IN GEN
//SHOWS MARKET CAP FOR LOCAL WITH COIN ID TO SPECIFIC CURRENCY//'https://api.coingecko.com/api/v3/coins/markets?vs_currency=uah&order=market_cap_desc&per_page=100&page=1&sparkline=false' \
//SHOWS CURRENT MARKET CHART FOR COIN ID TO SPECIFIC CURRENCY//https://api.coingecko.com/api/v3/coins/etherium/market_chart?vs_currency=uah&days=24
//GOOD FOR THE MAIN PAGE SHOWS GENERAL INFORMATION RELATIVE GLOBALLY 'https://api.coingecko.com/api/v3/global'
var testy0='https://api.coingecko.com/api/v3/coins/categories?id=augmented-reality'
//^^^^^^^^^^^^//
var testy='https://api.coingecko.com/api/v3/coins/categories?id=aave-tokens'
var geckoUrlCoinsB='https://api.coingecko.com/api/v3/coins/bitcoin/tickers?'
var geckoUrlCoinsE='https://api.coingecko.com/api/v3/'
var geckoUrlCoinsDG='https://api.coingecko.com/api/v3/'
var geckoUrlCoinsS='https://api.coingecko.com/api/v3/'
var geckoUrlCoinsAD='https://api.coingecko.com/api/v3/'
var geckoUrlGlobal='https://api.coingecko.com/api/v3/'
//  'https://api.coingecko.com/api/v3/coins/bitcoin?localization=en&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false' \

var geckoUrSimpleP='https://api.coingecko.com/api/v3/simple/price?ids=etherium,bitcoin,doge&vs_currencies=uah,usd'

var geckoUrSimpleTP='https://api.coingecko.com/api/v3/'
var geckoUrl4='https://api.coingecko.com/api/v3/'
var geckoUrl5='https://api.coingecko.com/api/v3/'
var geckoUrl6='https://api.coingecko.com/api/v3/'
var geckoUrl7='https://api.coingecko.com/api/v3/'
var geckoUrl8='https://api.coingecko.com/api/v3/'

$.ajax({
    url: testy,
    method: 'GET',
}).then(function (response) {
    console.log('AJAX Response \n-------------');
    console.log(response);


});


/** 
//TIMESERIES INTRADAY---IBM--5MIN
var requestUrl='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=OMI2ERRUQEZP3AQO';
//MARKET OVERVIEW---IBM
var requestUrl2='https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=OMI2ERRUQEZP3AQO';

//TIMESERIES WEEKLY---IBM
//this brings up 20ish years of data you dont need-------ADD INTERVAL=10&APIKEY=
var requestUrl3='https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&interval=10w&apikey=OMI2ERRUQEZP3AQO'

//BIT TO UAH

var requestUrl4 ='https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=UAH&apikey=OMI2ERRUQEZP3AQO';

//INTRDAY-----COIN----MARKET
var requestUrl5 ='https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=UAH&interval=5min&apikey=OMI2ERRUQEZP3AQO'




// search engine -----SYMBOL_SEARCH&keywords=______&apikey=OMI2ERRUQEZP3AQO
var searchUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=OMI2ERRUQEZP3AQO';

$.ajax({
    url: searchUrl,
    method: 'GET',
}).then(function (response) {
    console.log('AJAX Response \n-------------');
    console.log(response);


});



// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
$.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (response) {
    console.log('AJAX Response \n-------------');
    console.log(response);
    //var x = response
    //console.log(x)
    //$('#CYKA').append(x)
  });

  $.ajax({
    url: requestUrl2,
    method: 'GET',
  }).then(function (response) {
    console.log('AJAX Response \n-------------');
    console.log(response);
    //var x = response
    //console.log(x)
   // $('#CYKA').append(x)
  });

  $.ajax({
    url: requestUrl3,
    method: 'GET',
  }).then(function (response) {
    console.log('AJAX Response \n-------------');
    console.log(response);
    //var x = response
    //console.log(x)
    //$('#CYKA').append(x)
  });
  
  $.ajax({
    url: requestUrl4,
    method: 'GET',
  }).then(function (response) {
    console.log('AJAX Response \n-------------');
    console.log(response);
    //var x = response
    //console.log(x)
    //$('#CYKA').append(x)
  });
  $.ajax({
    url: requestUrl5,
    method: 'GET',
  }).then(function (response) {
    console.log('AJAX Response \n-------------');
    console.log(response);
    //var x = response
    //console.log(x)
    //$('#CYKA').append(x)
  });

  */