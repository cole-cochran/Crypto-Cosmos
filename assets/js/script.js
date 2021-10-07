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
    console.log(response.value);
    //console.log(response.value[0].image.thumbnail.contentUrl)



    for (var i = 0; i < 6; i++) {
      var newsName = response.value[i].name;
      var newsDescription = response.value[i].description;
      var newsUrl = response.value[i].url;
      var thumbnailUrl = response.value[i].image.thumbnail.contentUrl;

      if (thumbnailUrl) {

      console.log(thumbnailUrl);
      var altImageUrl = "./assets/images/background2.jpg";
      var newsImageEl = $("<img>");
      newsImageEl.attr("src" , thumbnailUrl);
      $("#articles").append(newsImageEl);
    }
    else {
      var altImageEl = $("<img>");
      altImageEl.attr("src", altImageUrl);
      $("#articles").append(altImageEl);
    }
      var nameEl = $("<p>");
      nameEl.text(newsName);
      $("#articles").append(nameEl);

      var descriptionEl = $("<p>");
      descriptionEl.text(newsDescription);
      $("#articles").append(descriptionEl);

      var linkEl = $("<p>");
      linkEl.text(newsUrl);
      $("#articles").append(linkEl);

 //     console.log("titleEl");
 //     console.log("authorEl");
    }

  });
}
});

