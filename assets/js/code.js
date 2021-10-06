
//var userChoice1=$('#user-choice');

//var userChoice2=$('#user-choice2');

var submit = $("#submit");

var userInputCoin = $("");

var userInputPriceCo = $("");

var userInputPriceCurr = $("");

var userInputCoinGr = $("#user-choice1");
console.log(userInputCoinGr);

var userInputCurr = $("#user-choice");
console.log(userInputCurr);

//--VAN,GECKO DIFFERS API EX FOR EXCHANGE COINS FOR COINS+ID
var geckoEx = "https://api.coingecko.com/api/v3/exchange_rates";

var vanEXS =
  "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=OMI2ERRUQEZP3AQO";

var vanEX =
  "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=OMI2ERRUQEZP3AQO";

//NEXT 2 BELOW ARE FOR FUNCTION TO SEARCH FOR SPECIFIC EXCHANGE RATE--ONCE THAT WORKS:/
//FUNCTION IS CURR AT LINE 51
var vanEx1 =
  "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=";

var vanEx2 = "&to_currency=";
var vanEx3 = "&apikey=OMI2ERRUQEZP3AQO";

//BASES FOR GECKO ....
var geckoBase = "https://api.coingecko.com/api/v3/";

var BlockChList = geckoBase + "asset_platforms";

var CoinStatus = geckoCoins + userInputCoin + "status_updates";

var geckoSearchBase = geckoBase + "search/";

var geckoCoins = geckoBase + "coins/";

var geckoCoinSearch = geckoCoins + userInputCoin;

var geckoBit = geckoBase + "coins/bitcoin";

var geckoETH = geckoBase + "coins/ethereum";

var geckoEx = geckoBase + "exchange_rates";

var geckoMarkGraphBase =
  geckoCoins +
  "markets?vs_currency=" +
  userInputCurr +
  "&ids=" +
  userInputCoinGr +
  "&order=market_cap_desc&per_page=100&page=1&sparkline=true";

var geckoMarkToUs =
  geckoBase +
  "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

var geckoCateg = geckoBase + "coins/categories";

var geckoCoinPriceBase = geckoBase + "simple/price?";

var geckoCoinPriceSearch1 =
  geckoCoinPriceBase +
  "ids=" +
  userInputPriceCo +
  "&vscurrencies=" +
  userInputPriceCurr;

//GOOD FOR THE MAIN PAGE SHOWS GENERAL INFORMATION RELATIVE GLOBALLY
//'https://api.coingecko.com/api/v3/global'

var geckoUrSimpleP =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,shiba-inu&vs_currencies=uah,usd";

  var getLocSearch = function(userInputCoinGr) {
    var locApiUrl = geckoCoins + 'markets?vs_currency=usd&ids='+ userInputCoinGr +'&order=market_cap_desc&per_page=100&page=1&sparkline=true'
    fetch(locApiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    displayResults(data,userInputCoinGr);
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
        console.log(query);
        console.log(data);
        displaySearch.textContent = `${query}`;
        // loop through the data and display the results;
       }   return;
    } 
    submit.on('click', function(event) {
    event.preventDefault();
    var userInputCoinGr = $(userInputCoinGr).val();
    getLocSearch(UserInputCoinGr);
});

  $(document).ready(function(){
    $('select').formSelect();


  });
  console.log(getLocSearch);


var topTrend = [];
console.log("////////////TOP 7 TRENDING COIN////////////\n-------------");
console.log(topTrend);

var topTrendPic = [];
console.log("///////////THUMBNAILS FOR TOP 7///////////\n-------------");
console.log(topTrendPic);

var coins = [];
console.log("////////////ALL COINS////////////\n-------------"); //FOR SEARCH
console.log(coins);
/*
 SEARCH FUNCTION FOR ALL COINS HERE
 */

var sparkline = [];
console.log("////////////SPARKLINE RAW FOR BIT////////////\n-------------");
console.log(sparkline);

var sparkLineE = [];
console.log(
  "/////////ETHEREUM MARKET CAP SPARKLINE////////////\n-------------"
);
console.log(sparkLineE);

var sparkLineS = [];
console.log(
  "/////////SHIBA-INU MARKET CAP SPARKLINE////////////\n-------------"
);
console.log(sparkLineS);

var sparkLineL = [];
console.log(
  "/////////SMOOTH LOVE POTION MARKET CAP SPARKLINE////////////\n-------------"
);
console.log(sparkLineL);

var sparkLineUfo = [];
console.log(
  "/////////UFO GAMING MARKET CAP SPARKLINE////////////\n-------------"
);
console.log(sparkLineUfo);

var sparkLineUnM = [];
console.log(
  "/////////UNMARKET//MARKET CAP SPARKLINE////////////\n-------------"
);
console.log(sparkLineUnM);

var sparkLineAxie = [];
console.log("/////////AXIE//MARKET CAP SPARKLINE////////////\n-------------");
console.log(sparkLineAxie);

var sparkLineBi = [];
console.log(
  "/////////BINANCE  MARKET CAP SPARKLINE////////////\n-------------"
);
console.log(sparkLineBi);

var sparkLineWall = [];
console.log(
  "/////////WALL-STREET-GAMING MARKET CAP SPARKLINE////////////\n-------------"
);
console.log(sparkLineWall);

//THIS FOR SOME REASON IS VS PRICE OF BITCOIN POSSIBLE ERROR REQUEST IS VS USD
var exchangeRates = [];
console.log("////////////EXCHANGE RATES VS USD////////////\n-------------");
console.log(exchangeRates);

var exchangeRatesVan = [];
console.log(
  "////////////EXCHANGE RATES VS USD API VAN////////////\n-------------"
);
console.log(exchangeRatesVan);

//https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1

$.ajax({
  url: "https://api.coingecko.com/api/v3/search/trending",
  method: "GET",
}).then(function (response) {
  var rp1 = response.coins;
  var rp2 = rp1[0].item;
  thb = rp2.thumb;
  var rp3 = rp1[1].item;
  thb2 = rp3.thumb;
  var rp4 = rp1[2].item;
  thb3 = rp4.thumb;
  var rp5 = rp1[3].item;
  thb4 = rp5.thumb;
  var rp6 = rp1[4].item;
  thb5 = rp6.thumb;
  var rp7 = rp1[5].item;
  thb6 = rp7.thumb;
  var rp8 = rp1[6].item;
  thb7 = rp8.thumb;
  topTrendPic.push(thb, thb2, thb3, thb4, thb5, thb6, thb7);
  topTrend.push(rp2, rp3, rp4, rp5, rp6, rp7, rp8);
});

/*
submit.on('click',search())
function search(){
   var userInputCurr= $('#user-choice').text()
   console.log(userInputCurr)
   var userInputCoinGr= $('#user-choice1').val()
   console.log(userInputCoinGr)
}(function(){
 var a=$.ajax({
    url: geckoCoins + 'markets?vs_currency='+ userInputCurr +'&ids='+ userInputCoinGr +'&order=market_cap_desc&per_page=100&page=1&sparkline=true'
    ,
    method: 'GET',

//}).then(function (response) {
    //console.log('EXCHANGE RATES \n-------------');
   // var rp1 = response.rates
   //exchangeRates.push(rp1)
   //console.log(search)
})}
)
*/
$.ajax({
  url: geckoEx,
  method: "GET",
}).then(function (response) {
  //console.log('EXCHANGE RATES \n-------------');
  var rp1 = response.rates;
  exchangeRates.push(rp1);
});

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  sparkLineBi.push(sp3);
   const labels = [
        'monday',
        'Tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
        ////////
       /* '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00am',*/
      ];
      
      var data = {
        labels: labels,
        datasets: [{
          label: 'Binance Market Chart',
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
        document.getElementById('myChartBi'),
        config)
});

$.ajax({
  url: geckoCoins + "list",
  method: "GET",
}).then(function (response) {
  coins.push(response);
});

// $.ajax({
//   url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=true",
//   method: "GET",
// }).then(function (response) {
//   var sp1 = response[0];
//   var sp2 = sp1.sparkline_in_7d;
//   var sp3 = sp2.price;
//   sparkLineE.push(sp3);
//   const labels = [
//         'monday',
//         'Tuesday',
//         'wednesday',
//         'thursday',
//         'friday',
//         'saturday',
//         'sunday',
//         /* '1:00am',
//         '2:00am',
//         '3:00am',
//         '4:00am',
//         '5:00am',
//         '6:00am',
//         '7:00am',
//         '8:00am',
//         '9:00am',
//         '10:00am',
//         '11:00am',
//         '12:00pm',
//         '1:00pm',
//         '2:00pm',
//         '3:00pm',
//         '4:00pm',
//         '5:00pm',
//         '6:00pm,
//         '7:00pm',
//         '8:00pm',
//         '9:00pm',
//         '10:00pm',
//         '11:00pm',
//         '12:00am',*/
//       ];
      
//       var data = {
//         labels: labels,
//         datasets: [{
//           label: 'Ethereum Market Chart',
//           backgroundColor: 'rgb(255, 99, 132)',
//           borderColor: 'rgb(255, 99, 132)',
//           data: sp3
//         }]
//       };
      
//     const config = {
//         type: 'line',
//         data: data,
//         options: {}
//       };
//       var myChart = new Chart(
//         document.getElementById('myChartEth'),
//         config)
// });

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=shiba-inu&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  sparkLineS.push(sp3);
   const labels = [
        'monday',
        'Tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
        /*'1:00am',
        '2:00am',
        '3:00am',
        '4:00am',
        '5:00am',
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00pm',*/
      ];
      
      var data = {
        labels: labels,
        datasets: [{
          label: 'Shiba-Inu Market Chart',
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
        document.getElementById('myChartShib'),
        config)
});

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=wall-street-games&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  sparkLineWall.push(sp3);
  const labels = [
        'monday',
        'Tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
        ////////
        /* '1:00am',
        '2:00am',
        '3:00am',
        '4:00am',
        '5:00am',
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00am',*/
      ];
      
      var data = {
        labels: labels,
        datasets: [{
          label: 'Wall-Street-Games Market Cap',
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
        document.getElementById('myChartWall'),
        config)
});

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=unmarshal&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  //sparkLineUnM.push(sp3);
   const labels = [
        'monday',
        'Tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
       /* '1:00am',
        '2:00am',
        '3:00am',
        '4:00am',
        '5:00am',
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00am',*/
      ];
      
      var data = {
        labels: labels,
        datasets: [{
          label: 'UnMarshal Market Cap Chart',
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
        document.getElementById('myChartUnMar'),
        config)
});

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids= axie-infinity&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  //sparkLineAxie.push(sp3);
   const labels = [
        'monday',
        'Tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
        /*'1:00am',
        '2:00am',
        '3:00am',
        '4:00am',
        '5:00am',
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00am',*/
      ];
      
      var data = {
        labels: labels,
        datasets: [{
          label: 'Axie Market Cap Chart',
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
        document.getElementById('myChartAx'),
        config)
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
    //sparkLineL.push(sp3)
    const labels = [
        'monday',
        'Tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
        /*'1:00am',
        '2:00am',
        '3:00am',
        '4:00am',
        '5:00am',
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00am',*/
      ];
      
      var data = {
        labels: labels,
        datasets: [{
          label: 'Smooth-Love-Potion Market Cap Chart',
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
        document.getElementById('myChartSmo'),
        config)
});

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ufo-gaming&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  //console.log(response)
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  var sp3 = sp2.price;
  //console.log(sp3)
  //sparkLineUfo.push(sp3);
   const labels = [
        'monday',
        'Tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
        /*'1:00am',
        '2:00am',
        '3:00am',
        '4:00am',
        '5:00am',
        '6:00am',
        '7:00am',
        '8:00am',
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
        '6:00pm,
        '7:00pm',
        '8:00pm',
        '9:00pm',
        '10:00pm',
        '11:00pm',
        '12:00am',*/
      ];
      
      var data = {
        labels: labels,
        datasets: [{
          label: 'Ufo-Gaming-Market Cap Chart',
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
        document.getElementById('myChartUfo'),
        config)
});
$.ajax({
  url: vanEXS,
  method: "GET",
}).then(function (response) {
  //console.log(response)
  //console.log('EXCHANGE RATES \n-------------');
  //var rp1 = response[0]
  //console.log(response)
  exchangeRatesVan.push(response);
});

$.ajax({
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=true",
  method: "GET",
}).then(function (response) {
  console.log(
    "BITCOIN MARKET CAP////WITH THE SPARKLINE THIS IS GONNA THROW ERRORS BC OF CHART IGNORE \n-------------"
  );
  var sp1 = response[0];
  var sp2 = sp1.sparkline_in_7d;
  //console.log(sp2)
  sparkline.push(sp2);
  var sp3 = sp2.price;
  console.log(sp3)
  //data.datasets.push(sp3)
 const labels = [
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  var data = {
    labels: labels,
    datasets: [
      {
        label: "Bitcoin Market Cap Chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: sp3,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };
  var myChart = new Chart(
    document.getElementById('myChart'),
    config)
});
