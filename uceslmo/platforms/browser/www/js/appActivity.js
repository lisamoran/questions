// script holding functions to load the map and perform location tracking

//create client var
var client;


// code to add custom markers
var testMarkerRed = L.AwesomeMarkers.icon({
	icon: 'play',
	markerColor: 'red'
});
var testMarkerPink = L.AwesomeMarkers.icon({
	icon: 'play',
	markerColor: 'pink'
});

//set up mymap as a global variable outside of loadmap function
var mymap;

// to run when the App starts
loadMap()


// load map function
function loadMap() {
		// load the map
	mymap = L.map('mapid').setView([51.505, -0.09], 13);

	// load the tiles

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'

	}).addTo(mymap);
	
	// add a point
	//L.marker([51.5, -0.09]).addTo(mymap)

}

// create a custom popup
var popup = L.popup();

// create an event detector to wait for the user's click event and then use the popup to show them where they clicked
// note that you don't need to do any complicated maths to convert screen coordinates to real world coordiantes - the Leaflet API does this for you
function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(mymap);
}
// now add the click event detector to the map
mymap.on('click', onMapClick);

//document.getElementById('mapid').innerHTML="L.marker(latlng, {icon:testMarkerPink}).addTo(mymap).bindPopup("<b>"position.coords"</b>");"

