// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var quake;
$(document).on("ready", function() {
	initMap()
  	var quake;

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
			var quakeLat= quake[i].geometry.coordinates[1];
			var quakeLong= quake[i].geometry.coordinates[0];
			
			new google.maps.Marker({
            position:  {lat: quakeLat, lng: quakeLong},
            map: map
          });
			var place = quake[i].properties.place;
			var mag = quake[i].properties.mag;
			console.log(place);
			$("#info").append(`<p>M ${mag} - ${place}</p>`)
		}
	}

	function onError(){
		console.log("error")
	}


/*window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var lat = quake.features[i].geometry.coordinates;
          new google.maps.LatLng([lat],[long]);
          new google.maps.Marker({
            position: latLng(lat, long),
            map: map
          });
        }
      }*/

});

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 37.78, lng: -122.44},
          zoom: 2
        });
      var script = document.createElement('script');

      }


