
var destCity = "";
var yelpURL = "https://api.yelp.com/v3/businesses/search?location=" + city;
var city = "";

var params = {
  request: {
    slice: [
      {
        origin: "DEN",
        destination: "LAX",
        date: "2017-06-30"
      }
    ],
    passengers: {
      adultCount: 1,
      infantInLapCount: 0,
      infantInSeatCount: 0,
      childCount: 0,
      seniorCount: 0
    },
    solutions: 20,
    refundable: false
  }
}
function flightSearch(){
	$("#glyph").on("click", function(){

		var queryURL = "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAoBexp2doZWkhqk1nNKby3KfXIa737dMs";
		$.ajax({
		url: queryURL,
		headers: {"Content-Type":"application/json"},
		data: JSON.stringify(params),
		method: "POST"

	}).done((response) => {
	console.log(response);
	});
});
};
flightSearch();




function yelpSearch() {
	$.ajax ({
		url: yelpURL,
		method: "GET"
	}).done(function(response) {
		console.log(response);
	});
}

 	var artist = "";
 	var queryURL = "https://api.seatgeek.com/2/performers?q=" + artist + "&per_page=1&client_id=MTAyMzg3N3wxNDk4MDEzODgyLjUy";


    
    $("#glyph").on("click", function(){
    	artist = $("#search-input").val().trim();

    // Javascript validation for search input
    
    	if(artist == '') {
    		return false
    	}

    	 	var artist = "";
 	var queryURL = "https://api.seatgeek.com/2/events?q=" + artist + "&per_page=1&client_id=MTAyMzg3N3wxNDk4MDEzODgyLjUy";

  
    // Javascript validation for search input
    
    

    	$.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      var location = response.events[0].venue.city;
      var upcomingEvents = response.events[0].has_upcoming_events;
     
      // console.log(location);
   
   
})
    });
