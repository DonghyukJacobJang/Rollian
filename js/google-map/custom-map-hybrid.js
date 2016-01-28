// The following example creates a marker in centerpoint, Sweden
// using a DROP animation. Clicking on the marker will toggle
// the animation between a BOUNCE animation and no animation.

var centerpoint = new google.maps.LatLng(43.711561,-79.37533);
var target = new google.maps.LatLng(43.711561,-79.37533);
var marker;
var map;

function initialize() {
  var mapOptions = {
	zoom: 18,
	mapTypeId: google.maps.MapTypeId.HYBRID,
	center: centerpoint
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
		  mapOptions);
  marker = new google.maps.Marker({
	map:map,
	draggable:true,
	animation: google.maps.Animation.DROP,
	position: target
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() != null) {
	marker.setAnimation(null);
  } else {
	marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
