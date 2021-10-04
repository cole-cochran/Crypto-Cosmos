// this is for the news api

$.ajax({
    url: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=eff4a3ad5b8949c59ef052cc5fe84836',
    method: 'GET',

}).then(function (response) {
console.log(response)
 

});