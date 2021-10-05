// this is for the news api
function newsApiCall() {
  var apiUrl =
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=eff4a3ad5b8949c59ef052cc5fe84836";

  $.ajax({
    url: apiUrl,
    method: "get",
  }).then(function (response) {
    console.log(response);

    for (var i = 1; i < 6; i++) {
      var newsAuthor = response.author;
      var newsTitle = response.title;
      var newsId = response.source.id;
      var newsDescription = response.description;
      var newsURL = response.url;
      var newsImageUrl = reposnse.urlToImage;

      var newsImageEl = $("<img>");
      newsImageEl.img(newsImageUrl);
      $("#news").append(newsImageUrl);
      $("#news").append(newsURl);

      var titleEl = $("<p>");
      titleEl.text(newsTitle);
      $("#news").append(titleEL);

      var authorEl = $("<p>");
      authorEl.text(newsAuthor);
      $("#news").append(authorEL);

      var sourceEl = $("<p>");
      sourceEl.text(newsId);
      $("#news").append(sourceEL);

      var descriptionEl = $("<p>");
      descriptionEl.text(newsDescription);
      $("#news").append(descriptionEL);


      console.log("titleEl");
      console.log("authorEl");
    }

  });

}
