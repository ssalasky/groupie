<<<<<<< HEAD

var destCity = "";
var yelpURL = "https://api.yelp.com/v3/businesses/search?location=" + city;
var city = "";


alert("connected");


var flights = {
	to:"",
	from:"",
	departTo:"",
	departHome:""
}
function flightSearch(){
	$("#glyph").on("click", function(){
		var to = $("#search-input").val().trim();
		var queryURL = "https://api.test.sabre.com/v1/shop/flights?origin=JFK&destination=" + to + "&departuredate=2017-07-07&returndate=2017-07-08&onlineitinerariesonly=N&limit=10&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=US";
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


=======
var destCity = ""; 
var yelpURL = "https://api.yelp.com/v3/businesses/search?location=" + city; 
var city = "";   

alert("connected");   

var flights = {
     to:"",
     from:"",     
     departTo:"",     
     departHome:"" 
 } 
     
function flightSearch(){
     $("#glyph").on("click", function(){
        var to = $("#search-input").val().trim();
        var queryURL = "https://api.test.sabre.com/v1/shop/flights?origin=JFK&destination=" + to + "&departuredate=2017-07-07&returndate=2017-07-08&onlineitinerariesonly=N&limit=10&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=US";

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
>>>>>>> b4eba92c75423ab812d8f7376251748e6c41437c
