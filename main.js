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