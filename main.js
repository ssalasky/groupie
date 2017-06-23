

var destCity = "";
var yelpURL = "https://api.yelp.com/v3/businesses/search?location=" + city;
var city = "";




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
		Authorization: "Bearer T1RLAQJBiCrkxPozlYiWyTPNDg5vgjKT5hAKwt3kiUP4CMT/SRU/ZCzbAADAgItGc7BR6acrzxgvT9P+kSykvh/HK7fqFUGFaDUcF0S+TI/4hCIlK8hzZdvLK4Hq6XePYWaWz9s+X2pqt+ooMX8pBS5jDpkr9ZFs/KeXWhiu5Zq2R3LkDeZEQiVPdNUBfAosFaK7174NaUNtVg/eIvR1ZCDL9/Zxv2kjX575yYEyrKeL+LHtaDcnsfz4GpLncBanpUUaGMVRUlSK5r5MNBVjmrjMn7LFLN+MtCWcdmtHGDKyRQUhLn10tLyDv9Dl"
		X-Originating-Ip: 130.253.27.159

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



