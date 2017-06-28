 	var artist = "";
 	var queryURL = "https://api.seatgeek.com/2/events?q=" + artist + "&client_id=MTAyMzg3N3wxNDk4MDEzODgyLjUy";

    
    $("#submitArtist").on("click", function(){
    	artist = $("#artistID").val().trim();

    // Javascript validation for search input
    
    	if(artist == '') {
    		return false
    	}

    	$.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);

   
   
})
    });

   function getGif(){
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=artist%20" + artist + "&rating=pg-13&api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
        var newDiv = $("<div>")
        var artistGif = $("<img>");
        artistGif.addClass("artistPic");
        artistGif.attr("src", response.data[0].images.fixed_height.url);
        moveGif = response.data[0].images.fixed_height.url;
        stillGif = response.data[0].images.fixed_height_still.url;
      
        $("#artistSpace").append(newDiv);
        newDiv.append(artistGif);   
     
 });