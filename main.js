$("#loadingScreen").hide();

var config = {
  apiKey: "AIzaSyD7Dl_oVcskvGAUxxgm3LwQC_saHWDZlbQ",
  authDomain: "groupie-project.firebaseapp.com",
  databaseURL: "https://groupie-project.firebaseio.com",
  projectId: "groupie-project",
  storageBucket: "groupie-project.appspot.com",
  messagingSenderId: "98043513312"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#search-button").on("click", function(){
  event.preventDefault();
  artist = $("#search-input").val();

  database.ref().push({
    artist:artist
  });
});

var t;
var artist = "";
var hotelArea = "";
var venueName = "";
var areaLocation = "";
var website = "";
var venueLongitude = "";
var venueLatitude = "";


var params = {
  request: {
    slice: [
    {
      origin: "",
      destination: "",
      date: "",
      maxStops: 1
    },
    {
      origin: "",
      destination: "",
      date: "",
      maxStops: 1
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
  $("#first-page").empty();
  loading();
};

function flightSearch(){
  var queryURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAoBexp2doZWkhqk1nNKby3KfXIa737dMs"//AIzaSyDlW31JmWnRfy96JfYhjDQiL2ZQNYB2xkk";
  
  $.ajax({
    url: queryURL,
    headers: {"Content-Type":"application/json"},
    data: JSON.stringify(params),
    method: "POST"
  }).done((response) => {
   // console.log(response);

   var flightPrice1 = response.trips.tripOption[0].saleTotal + "<br>" + "Flight Number: " + response.trips.tripOption[0].slice[0].segment[0].flight.number + "<br>" + "Airline: " + response.trips.tripOption[0].slice[0].segment[0].flight.carrier + "<br>" + fromFlight + " => " + airCode;
   var flightPrice2 = response.trips.tripOption[1].saleTotal + "<br>" + "Flight Number: " + response.trips.tripOption[1].slice[0].segment[0].flight.number + "<br>" + "Airline: " + response.trips.tripOption[1].slice[0].segment[0].flight.carrier + "<br>" + fromFlight + " => " + airCode;
   var flightPrice3 = response.trips.tripOption[2].saleTotal + "<br>" + "Flight Number: " + response.trips.tripOption[2].slice[0].segment[0].flight.number + "<br>" + "Airline: " + response.trips.tripOption[2].slice[0].segment[0].flight.carrier + "<br>" + fromFlight + " => " + airCode;
   var flightPrice4 = response.trips.tripOption[3].saleTotal + "<br>" + "Flight Number: " + response.trips.tripOption[3].slice[0].segment[0].flight.number + "<br>" + "Airline: " + response.trips.tripOption[3].slice[0].segment[0].flight.carrier + "<br>" + fromFlight + " => " + airCode;
   var flightPrice5 = response.trips.tripOption[4].saleTotal + "<br>" + "Flight Number: " + response.trips.tripOption[4].slice[0].segment[0].flight.number + "<br>" + "Airline: " + response.trips.tripOption[4].slice[0].segment[0].flight.carrier + "<br>" + fromFlight + " => " + airCode;
   var flightPrice6 = response.trips.tripOption[5].saleTotal + "<br>" + "Flight Number: " + response.trips.tripOption[5].slice[0].segment[0].flight.number + "<br>" + "Airline: " + response.trips.tripOption[5].slice[0].segment[0].flight.carrier + "<br>" + fromFlight + " => " + airCode;
   var flightLink = "https://www.google.com/flights/#search;f="+fromFlight+";t="+airCode+";d="+date+";r="+fReturn;

   $(".bFlight").append("<a href="+flightLink+"target=_blank>Click to Purchase Flights!</a>");
   $(".flight1").append("Total Price: $" + flightPrice1.slice(3));
   $(".flight2").append("Total Price: $" + flightPrice2.slice(3));
   $(".flight3").append("Total Price: $" + flightPrice3.slice(3));
   $(".flight4").append("Total Price: $" + flightPrice4.slice(3));
   $(".flight5").append("Total Price: $" + flightPrice5.slice(3));
   $(".flight6").append("Total Price: $" + flightPrice6.slice(3));

   // var flightDiv = $("<div>");
   // flightDiv.addClass("flight");
   // flight.text("Flight Place" + --------);
   // $("#second-page").append(flightDiv);
  });
};


function airportCode(){
  var URL = "https://cors-anywhere.herokuapp.com/http://www.distance24.org/route.json?stops="+zips
  
  $.ajax({
    url: URL,
    method: "GET"
  }).done(function(response){ 
    // console.log(response);
  
    fromFlight = response.stops[0].airports[0].iata;
    params.request.slice[0].origin = fromFlight;

    returnFlight1 = response.stops[0].airports[0].iata;
    params.request.slice[1].destination = returnFlight1;

    // console.log("from " + fromFlight);
    // console.log("way back " + returnFlight1);
  });

  setTimeout(function() { flightSearch(); }, 1500);
  // console.log(params); 
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
          // console.log(response);
          // console.log(lat);
          // console.log(long);
          zips = response.results[0].address_components[6].long_name;
          // console.log("hey " + zips);   
      });
    });
  };
};

initMap();

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
      // console.log(response);

      //If there are no events coming up for the artist the following happens
      if(response.events[0] === undefined){   
        $("#first-page").empty();
        $("#noArtist").text("Sorry " + artist + " is not performing anytime soon... Try another artist.");
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?q=sorry-taylor-swift&rating=pg-13&api_key=dc6zaTOxFJmzC";

        $.ajax({
          url: queryURL,
          method: 'GET'
        }).done(function(response) {
            var newDiv = $("<div>")
            var artistGif = $("<img>");
            artistGif.addClass("col s6 offset-s3");
            artistGif.attr("src", response.data[1].images.fixed_height.url);
            $("#noArtist").append(newDiv);
            newDiv.append(artistGif);
        });
        } else {
          $("#noArtist").empty();

          var upcomingEvents = response.events[0].has_upcoming_events;

          venueLatitude = response.events[0].venue.location.lat;
          venueLongitude = response.events[0].venue.location.lon;
          hotelArea = response.events[0].venue.display_location;
          areaLocation = response.events[0].venue.city;
          venueName = response.events[0].venue.name;
          website = response.events[0].url;
          zipCode = response.events[0].venue.postal_code;
          date = moment(response.events[0].datetime_local).subtract(1, "days").format('YYYY-MM-DD');
          params.request.slice[0].date = date;
          fReturn = moment(response.events[0].datetime_local).add(1, "days").format('YYYY-MM-DD');
          params.request.slice[1].date = fReturn;
          
          airportCode();
          startSearch();
          getGif();
          placeSearch();
          
          // console.log(venueName);
          // console.log(zipCode);
          // console.log("hotel area: " + hotelArea);
          // console.log(date)
          // console.log(artist);

          $("#search-input").val("");
        }
  });
}); 


function placeSearch() {
  var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + venueLatitude + "," + venueLongitude + "&radius=500&types=hotel&key=AIzaSyDXrEeiKlrfaQDsH61Sk7OK5xCfJcg8J1M";
  
  $.ajax({ 
    url: queryURL,
    type: "GET"
  }).done(function(response) {
    console.log(response);
  });
};



function getGif(){
  console.log("called");
  
   var queryURL = "https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?q=" + artist + "&rating=pg-13&api_key=dc6zaTOxFJmzC";

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    var newDiv = $("<div>")
    var artistGif = $("<img>");

    artistGif.addClass("col s6 offset-s3");
    artistGif.attr("src", response.data[0].images.fixed_height.url);
    moveGif = response.data[0].images.fixed_height.url;
    stillGif = response.data[0].images.fixed_height_still.url;

    $("#artistSpace").html("<h2> Sweet! " + artist + " will be performing soon on " + date + " in " + areaLocation + " at the " + venueName + "<a href=" + website + " " + "target='_blank'" + "> Click here to purchase tickets.</a></h2>");
    $("#artistSpace").append(newDiv);

    newDiv.append(artistGif);
 });
};


function dadJoke() {
  var queryURL ="https://icanhazdadjoke.com/slack";

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response){
    var joke = response.attachments[0].text;
    $("#dadJoke").text(joke);

  });
};

function loading() {
  dadJoke();
  $("#whole").hide();
  $("#loadingScreen").show();
  time();
};

function time(){
  t = setTimeout(clearout, 6000)
};

function clearout(){
  $("#loadingScreen").hide();
  $("#whole").show();
};



