function searchMovie(){
    const settings ={
        "async":true,
        "crossDomain":true,
        "url":'https://api.themoviedb.org/3/movie/now_playing?api_key=619797393cd52383263f43d35d25f59f&language=en-US&page=1&region=US',
        "method":"GET",
        "header":{},
        "data":"{}"
    }
    $.ajax(settings).done((response)=>{

    });

}


