var artist = "";
var hotelArea = "";
//var airCode ="";
var params = {
  request: {
    slice: [
    {
      origin: "",
      destination: "",
      date: ""
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

// function startSearch(){
//     $("#second-page").empty();
//     flightSearch();
//     // here we will call the function that are needed.
//   });
  
// }


function flightSearch(){
      //$("#glyph").on("click", function(){


        var queryURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDlW31JmWnRfy96JfYhjDQiL2ZQNYB2xkk";
        $.ajax({
        url: queryURL,
        headers: {"Content-Type":"application/json"},
        data: JSON.stringify(params),
        method: "POST"

        

        }).done((response) => {
         console.log(response);
         // var flightDiv = $("<div>");
         // flightDiv.addClass("flight");
         // flight.text("Flight Place" + --------);
         // $("#second-page").append(flightDiv);


       });
    //});
  };
// flightSearch();
function airportCode(){

  var queryURL = "https://cors-anywhere.herokuapp.com/http://www.distance24.org/route.json?stops="+zipCode
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
    console.log(response);
    airCode = response.stops[0].airports[0].iata;
    params.request.slice[0].destination = airCode;
    console.log("new Dest " + airCode);

  });

  var URL = "https://cors-anywhere.herokuapp.com/http://www.distance24.org/route.json?stops="+zips
  $.ajax({
    url: URL,
    method: "GET"
  }).done(function(response){ 
    console.log(response);
    fromFlight = response.stops[0].airports[0].iata;
    params.request.slice[0].origin = fromFlight
    console.log("from " + fromFlight)



  })
  
    console.log(params);
    flightSearch();

};


var map, infoWindow;
      function initMap() {
       
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var lat = pos.lat;
            var long = pos.lng;
            var queryURL ="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key=AIzaSyBao5t2cXEN-W6a_Mw0JBIUlifRXiSaLaM";
            $.ajax({
            url: queryURL,
            method: "GET"
            }).done(function(response){
            console.log(response);
            console.log(lat);
            console.log(long);
            zips = response.results[0].address_components[7].long_name;
            console.log("hey " + zips);

          });

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      initMap()

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

    


$("#search-button").on("click", function(){

  artist = $("#search-input").val().trim();
 $("#artistSpace").empty();
  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.seatgeek.com/2/events?q=" + artist + "&per_page=1&client_id=MTAyMzg3N3wxNDk4MDEzODgyLjUy";



  if(!artist) {
    return false
  }

  

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
    hotelArea = response.events[0].venue.display_location;
    var location = response.events[0].venue.city;
    var upcomingEvents = response.events[0].has_upcoming_events;
    zipCode = response.events[0].venue.postal_code;
    console.log(zipCode);
    console.log(hotelArea);
    date = moment(response.events[0].datetime_local).format('YYYY-MM-DD');
  params.request.slice[0].date = date
  console.log(date)
  airportCode();
  getGif();

  console.log(artist);
  
});
$("#search-input").val("");

}); 


function placeSearch() {
  var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyDXrEeiKlrfaQDsH61Sk7OK5xCfJcg8J1M";
  
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
  
      var queryURL = "https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?q=artist%20" + artist + "&rating=pg-13&api_key=dc6zaTOxFJmzC";

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
// function dadJoke() {
//   console.log('dad');
//   var queryURL ="https://icanhazdadjoke.com/j/";
//   $.ajax({
//     Accept: "application/json",
//     url: queryURL,
//     method: 'GET'
//   }).done(function(response){
//     console.log(response)
//   })
// }








