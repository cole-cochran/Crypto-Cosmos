// this is for the news api



$(document).ready(function () {

newsApiCall();

function newsApiCall() {
  var apiUrl =
    "https://api.bing.microsoft.com/v7.0/news/search?q=bitcoin&count=6&sortby=date";

  $.ajax({
    url: apiUrl,
    headers: { 'Ocp-Apim-Subscription-Key': '9814c8a1fed24636852cabbb65974d43' },
    method: "GET"
  }).then(function (response) {
    console.log(response[0]);

    for (var i = 1; i < 6; i++) {
      var newsName = response.name;
      var newsDescription = response.description;
      var newsUrl = response.url;
      var thumbnailUrl = reposnse.image.thumbnail.contentUrl;

      var newsImageEl = $("<img>");
      newsImageEl.img(newsImageUrl);
      $("#news").append(thumbnailUrl);

      var nameEl = $("<p>");
      nameEl.text(newsName);
      $("#news").append(nameEl);

      var descriptionEl = $("<p>");
      descriptionEl.text(newsDescription);
      $("#news").append(descriptionEl);

      var linkEl = $("<p>");
      linkEl.text(newsUrl);
      $("#news").append(newsEl);

      console.log("titleEl");
      console.log("authorEl");
    }

  });

}
});