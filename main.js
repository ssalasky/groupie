var artist = "";

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
    	//$("#glyph").on("click", function(){

    		var queryURL = "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAoBexp2doZWkhqk1nNKby3KfXIa737dMs";
    		$.ajax({
    		url: queryURL,
    		headers: {"Content-Type":"application/json"},
    		data: JSON.stringify(params),
    		method: "POST"

    	}).done((response) => {
    	console.log(response);
      console.log("done");
    	//});
    });
};

flightSearch();

  
$("#glyph").on("click", function(){
	artist = $("#search-input").val().trim();

	var queryURL = "https://api.seatgeek.com/2/events?q=" + artist + "&per_page=1&client_id=MTAyMzg3N3wxNDk4MDEzODgyLjUy";

	console.log(artist);
// Javascript validation for search input

	if(artist == '') {
		return false
	}

	var artist = "";

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

function placeSearch() {

  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyDXrEeiKlrfaQDsH61Sk7OK5xCfJcg8J1M",
    type: "GET"
  }).done(function(response) {
    console.log(response);
  });
};

placeSearch();

