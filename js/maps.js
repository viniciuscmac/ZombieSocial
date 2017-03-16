function initMap() {
 var map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: -34.397, lng: 150.644},
   zoom: 6
 });
 var infoWindow = new google.maps.InfoWindow({map: map});

 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position) {
     var pos = {
       lat: position.coords.latitude,
       lng: position.coords.longitude
     };
     var final = "point("+position.coords.latitude+","+position.coords.longitude+")";
     console.log(final);

     infoWindow.setPosition(pos);
     infoWindow.setContent('You are here!');
     map.setCenter(pos);
   }, function() {
     handleLocationError(true, infoWindow, map.getCenter());
   });
 } else {
   handleLocationError(false, infoWindow, map.getCenter());
 }

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
 infoWindow.setPosition(pos);
 infoWindow.setContent(browserHasGeolocation ?
                       'Error: The Geolocation service failed.' :
                       'Error: Your browser doesn\'t support geolocation.');
}
