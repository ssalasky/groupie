
var destCity = "";
var yelpURL = "https://api.yelp.com/v3/businesses/search?location=" + city;
var city = "";

var flights= {
d0e5a12e8efb182ed8324e9114890fe815448560
	to:"",
	from:"",
	departTo:"",
	departHome:""
}
function flightSearch(){
	$("#glyph").on("click", function(){
		var to = $("#search-input").val().trim();
		var queryUrl = "https://api.test.sabre.com/v1/shop/flights?origin=JFK&destination=" + to + "&departuredate=2017-07-07&returndate=2017-07-08&onlineitinerariesonly=N&limit=10&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=US+T1RLAQIRLZsVFT5GKvpGoGbqwCjYmfS2oBAI9HhILmFlE90T/lq6rJejAADAUoCA+zSL5W+w8ycxufv6Y6f8NkTujc+SOvm8grMJ1MqZLcbhPFE90VSsbCSC77JRGJjdXcFr16K13oNCkCwO8zDj/cqIASel3e+VX0uwSMM5RIaK4rLeexukQy9W3tyxhT8aEGDxjqa/dWf7v8aHtx0r1hdLPrhsbDO8kHwffChgfidEn4qZkjjNgGDRrjmLN8Rkx6o8CoQlCyTaNlA/gDcqg8Osi6AH4w7E3cBCHf1kcsqhKVoiKzbPLWBQsE94";
		$.ajax({
		url: queryURL,
		method: "GET"
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


function yelpSearch() {
	$.ajax ({
		url: yelpURL,
		method: "GET"
	}).done(function(response) {
		console.log(response);
	});
}

