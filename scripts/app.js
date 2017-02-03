// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {
	initMap()
  

  	$.ajax({
			method: "GET",
			url: weekly_quakes_endpoint,
			data: $("form").serialize(),
			success: onSuccess,
			error: onError
	});

	function onSuccess(json){
		var quake= json.features;		
		for(var i = 0; i<quake.length; i++){
			var place = quake[i].properties.place;
			var mag = quake[i].properties.mag;
			console.log(place);
			$("#info").append(`<p>M ${mag} - ${place}</p>`)
		}
	}

	function onError(){
		console.log("error")
	}




});

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 37.78, lng: -122.44},
          zoom: 8
        });
      }
