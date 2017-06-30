
var artist = "";
//var airCode ="";
var params = {
  request: {
    slice: [
    {
      origin: "LAX",
      destination: "",
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

function startSearch(){
  $("#first-page").on("click" function(){
    $("#second-page").empty();
    flightSearch();
    // here we will call the function that are needed.
  });
  
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
         var flightDiv = $("<div>");
         flightDiv.addClass("flight");
         flight.text("Flight Place" + --------);
         $("#second-page").append(flightDiv);


       });
    //});
  };
// flightSearch();
function airportCode(){
  var queryURL = "http://www.distance24.org/route.json?stops="+zipCode
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
    console.log(response);
    airCode = response.stops[0].airports[0].iata;
    params.request.slice[0].destination = airCode;
    console.log("new Dest " + airCode);

    // newDest = "";
    //newDest = airCode;
    //console.log("new Dest " + newDest);
    console.log(params);
    flightSearch();
    //console.log(airCode);

  })
  

};


$("#glyph").on("click", function(){

	artist = $("#search-input").val().trim();
 $("#artistSpace").empty();
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
  zipCode = response.events[0].venue.postal_code;
  console.log(zipCode);
  airportCode();

});

}); 

function placeSearch() {
  var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyDXrEeiKlrfaQDsH61Sk7OK5xCfJcg8J1M",
  $.ajax({ 
    url: queryURL,
    type: "GET"
  }).done(function(response) {
    console.log(response);
  });
};

placeSearch();

function getGif(){
  console.log("called");
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
};

