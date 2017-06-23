var destCity = "";
var yelpURL = "https://api.yelp.com/v3/businesses/search?location=" + city;
var city = "";


var flights{
	to:"",
	from:"",
	departTo:"",
	departHome:""
}
function flightSearch(){
	$("#")
}


function yelpSearch() {
	$.ajax ({
		url: yelpURL,
		method: "GET"
	}).done(function(response) {
		console.log(response);
	});
}

