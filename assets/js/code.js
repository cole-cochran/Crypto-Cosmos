var userChoice1=$('#user-choice')
var userChoice2=$('#user-choice2')
var submit=$('#submit')
var vanEX = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=OMI2ERRUQEZP3AQO';
var vanEx1 = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='
var vanEx2 ='&to_currency=USD&apikey=OMI2ERRUQEZP3AQO';

var exQuery= function exchange(){
    var vanEx1 = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='
    var vanEx2 ='&to_currency=USD&apikey=OMI2ERRUQEZP3AQO';

    $.ajax({
        url: vanEx1 + userChoice1 + vanEx2 ,
        method: 'GET',
    }).then(function (response) {
        console.log('EXCHANGE RATES \n-------------');
        console.log(response);
       
        submit.on("click", function(event) {
        event.preventDefault();
        userChoice1=$(userChoice1).val()
        
        
      
     exQuery(userChoice1)
        
    })
    })
    
}
var vanEXS = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=OMI2ERRUQEZP3AQO';

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
var geckoUrlCoinsE='https://api.coingecko.com/api/v3/coins/etherium'
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
var topTrend=[] ;
var coins=[] ;
var sparkline=[] ;
var exchangeRates=[];
console.log(exchangeRates)

$.ajax({
    url: 'https://api.coingecko.com/api/v3/search/trending' ,
    method: 'GET',
}).then(function (response) {
    console.log('TRENDING COINS \n-------------');
    console.log(response);
    //console.log(userChoice)
   topTrend.push(response)
});
/*$.ajax({
    url: vanEX ,
    method: 'GET',
}).then(function (response) {
    console.log('EXCHANGE RATES \n-------------');
    console.log(response);
    //console.log(userChoice)
   exchangeRates.push(response)
});

console.log(topTrend)

*/
$.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=true'
    ,
    method: 'GET',
}).then(function (response) {
    console.log('BITCOIN MARKET CAP/////WITH THE SPARKLINE \n-------------');
    
    var sp1=response[0]
    console.log(sp1)
    var sp2=sp1.sparkline_in_7d
    console.log(sp2)
    var sp3=sp2.price 
    console.log(sp3)
   //data.datasets.data.push(sp3)
   const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  
  var data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [sp3]
    }]
  };
  
const config = {
    type: 'line',
    data: data,
    options: {}
  };
  var myChart = new Chart(
    document.getElementById('myChart'),
    config)
});

console.log(coins)

$.ajax({
    url: 'https://api.coingecko.com/api/v3/coins' ,
    method: 'GET',
}).then(function (response) {
    console.log('ALL COINS \n-------------');
    console.log(response);
   // console.log(userChoice)
   coins.push(response)
});

console.log(coins)
