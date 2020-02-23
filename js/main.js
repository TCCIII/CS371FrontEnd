function myFunction() {

  const settings ={
    "async":true,
    "crossDomain":true,
    "url":'https://api.themoviedb.org/3/movie/now_playing?api_key=619797393cd52383263f43d35d25f59f&language=en-US&page=1&region=US',
    "method":"GET",
    "header":{},
    "data":"{}"
  }
  $.ajax({
    dataType: "json",
    url: settings.url,
    success: function (data) {
      console.log(data);
      //$("#tBody").append(JSON.stringify(data));
      newDiv(data);

      $("<div/>").attr('id','new').appendTo('body');
    }
  });
}

function newDiv (json) {

  $.each(json.results, function (i, data) {
    const movie ={
      "title": data.title,
      "image": data.backdrop_path
    }
    $("#tBody").append(
      '<div><h1>' + movie.title + '</h1>' +
      '<tr><img src="https://image.tmdb.org/t/p/original' + data.backdrop_path + '" alt="' + data.title + '" style="width:22em;height:16em;">');
  });
}
