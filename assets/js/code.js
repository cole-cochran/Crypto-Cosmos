
//var userChoice1=$('#user-choice');

var userChoice2=$('#user-choice2');

var submit=$('#submit');

var userInputCoin=$('');

var userInputPriceCo=$('');

var userInputPriceCurr=$('');

var userInputCoinGr=$('#user-choice1').val()

var userInputCurr=$('#user-choice').val()

//--VAN,GECKO DIFFERS API EX FOR EXCHANGE COINS FOR COINS+ID
var geckoEx= 'https://api.coingecko.com/api/v3/exchange_rates';

var vanEXS = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=OMI2ERRUQEZP3AQO';


var vanEX = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=OMI2ERRUQEZP3AQO';
//NEXT 2 BELOW ARE FOR FUNCTION TO SEARCH FOR SPECIFIC EXCHANGE RATE--ONCE THAT WORKS:/
//FUNCTION IS CURR AT LINE 51
var vanEx1 = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='
var vanEx2 ='&to_currency=USD&apikey=OMI2ERRUQEZP3AQO';

//BASES FOR GECKO ....
var geckoBase='https://api.coingecko.com/api/v3/'

var geckoSearchBase = geckoBase + 'search/'

var geckoCoins= geckoBase +'coins/'

var geckoCoinSearch = geckoCoins + userInputCoin

var geckoBit= geckoBase + 'coins/bitcoin'

var geckoETH= geckoBase + 'coins/ethereum'

var geckoEx = geckoBase + 'exchange_rates'

var geckoMarkGraphBase = geckoCoins + 'markets?vs_currency='+userInputCurr+'&ids='+userInputCoinGr+'&order=market_cap_desc&per_page=100&page=1&sparkline=true'
var geckoMarkToUs = geckoBase +'/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

var geckoCateg= geckoBase + 'coins/categories'

var geckoCoinPriceBase = geckoBase+'simple/price?'

var geckoCoinPriceSearch1 = geckoCoinPriceBase + 'ids='+ userInputPriceCo +'&vscurrencies='+ userInputPriceCurr 

//GOOD FOR THE MAIN PAGE SHOWS GENERAL INFORMATION RELATIVE GLOBALLY 
//'https://api.coingecko.com/api/v3/global'

var geckoUrSimpleP='https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,doge&vs_currencies=uah,usd'

var geckoUrSimpleTP='https://api.coingecko.com/api/v3/'


var topTrend=[] ;
console.log('////////////TOP 7 TRENDING COIN////////////\n-------------');
console.log(topTrend);

var topTrendPic=[]
console.log('///////////THUMBNAILS FOR TOP 7///////////\n-------------');
console.log(topTrendPic);

var coins=[] ;
console.log('////////////ALL COINS////////////\n-------------')//FOR SEARCH
console.log(coins);


var sparkline=[] ;
console.log('////////////SPARKLINE RAW FOR BIT////////////\n-------------');
console.log(sparkline);

var sparkLineE=[];
console.log('/////////ETHEREUM MARKET CAP SPARKLINE////////////\n-------------');
console.log(sparkLineE);

var sparkLineS=[];
console.log('/////////SHIBA-INU MARKET CAP SPARKLINE////////////\n-------------');
console.log(sparkLineS);

var sparkLineL=[];
console.log('/////////SMOOTH LOVE POTION MARKET CAP SPARKLINE////////////\n-------------');
console.log(sparkLineL);

var sparkLineUfo=[];
console.log('/////////UFO GAMING MARKET CAP SPARKLINE////////////\n-------------');
console.log(sparkLineUfo);

var sparkLineUnM=[];
console.log('/////////UNMARKET//MARKET CAP SPARKLINE////////////\n-------------');
console.log(sparkLineUnM);

var sparkLineAxie=[];
console.log('/////////AXIE//MARKET CAP SPARKLINE////////////\n-------------');
console.log(sparkLineAxie);

var sparkLineBi=[];
console.log('/////////BINANCE  MARKET CAP SPARKLINE////////////\n-------------');
console.log(sparkLineBi);


var sparkLineWall=[];
console.log('/////////WALL-STREET-GAMING MARKET CAP SPARKLINE////////////\n-------------');
console.log(sparkLineWall);

//THIS FOR SOME REASON IS VS PRICE OF BITCOIN POSSIBLE ERROR REQUEST IS VS USD
var exchangeRates=[];
console.log('////////////EXCHANGE RATES VS USD////////////\n-------------');
console.log(exchangeRates);

var exchangeRatesVan=[];
console.log('////////////EXCHANGE RATES VS USD API VAN////////////\n-------------');
console.log(exchangeRatesVan);

submit.on('click', function searcher(userInputCurr,userInputCoinGr){
var geckoMarkGraphBase = geckoCoins + 'markets?vs_currency='+userInputCurr+'&ids='+userInputCoinGr+'&order=market_cap_desc&per_page=100&page=1&sparkline=true'

$.ajax({
    url: geckoMarkGraphBase,
    method: 'GET',
}).then(function (response) {
    console.log( response + '\n-------------');
     userInputCurr=$(userInputCurr).val(),
     userInputCoinGr=$(userInputCoinGr).val(),
    //var rp1 = response.rates
   //exchangeRates.push(rp1)

   searcher(userInputCurr,userInputCoinGr)
   
});
})
///HAVING TROUBLE GETTING THIS TO WORK WITH THE AJAX REQUEST WORKS WITH FETCH() /////ANOTHER CORS ISSUE
/*
var exQuery= function exchange(){
    var vanEx1 = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='
    var vanEx2 ='&to_currency=USD&apikey=OMI2ERRUQEZP3AQO';

    $.ajax({
        url: geckoMarkGraphBase,
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
*/
$.ajax({
    url: 'https://api.coingecko.com/api/v3/search/trending' ,
    method: 'GET',
}).then(function (response) {
    var rp1 = response.coins
    var rp2 = rp1[0].item
    thb=rp2.thumb
    var rp3 = rp1[1].item
    thb2=rp3.thumb
    var rp4 = rp1[2].item
    thb3=rp4.thumb
    var rp5 = rp1[3].item
    thb4=rp5.thumb
    var rp6 = rp1[4].item
    thb5=rp6.thumb
    var rp7 = rp1[5].item
    thb6=rp7.thumb
    var rp8 = rp1[6].item
    thb7=rp8.thumb
    topTrendPic.push(thb,thb2,thb3,thb4,thb5,thb6,thb7)
    topTrend.push(rp2,rp3,rp4,rp5,rp6,rp7,rp8)   
  
});

$.ajax({
    url: geckoEx ,
    method: 'GET',
}).then(function (response) {
    //console.log('EXCHANGE RATES \n-------------');
    var rp1 = response.rates
   exchangeRates.push(rp1)
});

$.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=true',
     method: 'GET',
 }).then(function (response) {
 
     //console.log(response)
     var sp1=response[0]
     var sp2=sp1.sparkline_in_7d
     var sp3=sp2.price 
     //console.log(sp3)
    sparkLineBi.push(sp3)
 });

$.ajax({
    url: geckoCoins + 'list' ,
    method: 'GET',
}).then(function (response) {
   coins.push(response)
});

$.ajax({
   url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=true',
    method: 'GET',
}).then(function (response) {
    
    var sp1=response[0]
    var sp2=sp1.sparkline_in_7d
    var sp3=sp2.price 
   sparkLineE.push(sp3)
});

$.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=shiba-inu&order=market_cap_desc&per_page=100&page=1&sparkline=true',
     method: 'GET',
 }).then(function (response) {
    //console.log(response)
     var sp1=response[0]
     var sp2=sp1.sparkline_in_7d
     var sp3=sp2.price 
     //console.log(sp3)
    sparkLineS.push(sp3)
 });

 $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=wall-street-games&order=market_cap_desc&per_page=100&page=1&sparkline=true',
     method: 'GET',
 }).then(function (response) {
    //console.log(response)
     var sp1=response[0]
     var sp2=sp1.sparkline_in_7d
     var sp3=sp2.price 
     //console.log(sp3)
    sparkLineWall.push(sp3)
 });

 $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=unmarshal&order=market_cap_desc&per_page=100&page=1&sparkline=true',
     method: 'GET',
 }).then(function (response) {
    //console.log(response)
     var sp1=response[0]
     var sp2=sp1.sparkline_in_7d
     var sp3=sp2.price 
     //console.log(sp3)
    sparkLineUnM.push(sp3)
 });


 $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids= axie-infinity&order=market_cap_desc&per_page=100&page=1&sparkline=true',
     method: 'GET',
 }).then(function (response) {
    //console.log(response)
     var sp1=response[0]
     var sp2=sp1.sparkline_in_7d
     var sp3=sp2.price 
     //console.log(sp3)
    sparkLineAxie.push(sp3)
 });
 $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=smooth-love-potion&order=market_cap_desc&per_page=100&page=1&sparkline=true',
     method: 'GET',
 }).then(function (response) {
    //console.log(response)
     var sp1=response[0]
     var sp2=sp1.sparkline_in_7d
     var sp3=sp2.price 
     //console.log(sp3)
    sparkLineL.push(sp3)
 });


 $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ufo-gaming&order=market_cap_desc&per_page=100&page=1&sparkline=true',
     method: 'GET',
 }).then(function (response) {
    //console.log(response)
     var sp1=response[0]
     var sp2=sp1.sparkline_in_7d
     var sp3=sp2.price 
     //console.log(sp3)
    sparkLineUfo.push(sp3)
 });


 $.ajax({
    url: vanEXS ,
    method: 'GET',
}).then(function (response) {
    //console.log(response)
    //console.log('EXCHANGE RATES \n-------------');
    //var rp1 = response[0]
    //console.log(response)
    exchangeRatesVan.push(response)
});

$.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=true',
    method: 'GET',
}).then(function (response) {
    console.log('BITCOIN MARKET CAP/////WITH THE SPARKLINE THIS IS GONNA THROW ERRORS BC OF CHART IGNORE \n-------------');
     var sp1=response[0]
    var sp2=sp1.sparkline_in_7d
    //console.log(sp2)
    sparkline.push(sp2)
    var sp3=sp2.price 
    //console.log(sp3)
   //data.datasets.push(sp3)
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
      data: sp3
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


