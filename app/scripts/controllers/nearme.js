'use strict';

angular.module('trashcanApp')
  .controller('NearmeCtrl', function ($scope, Rest) {

    // Get closest marker
    navigator.geolocation.getCurrentPosition(function(pos) {

      // Current location
      $scope.loc = { lat: pos.coords.latitude, long: pos.coords.longitude };

      // Radialen
      function rad(x) {
        return x*Math.PI/180;
      }

      var lat = $scope.loc.lat;
      var long = $scope.loc.long;
      var R = 6371; // radius of earth in km
      var distances = [];
      var closest = -1;

      // Get all markers and loop through them
      Rest.getAll().query({}, function(data) {
        for (var i=0; i<data.length; i++) {
          var mlat = data[i].lat;
          var mlong = data[i].long;
          var dLat = rad(mlat - lat);
          var dLong = rad(mlong - long);

          // Haversine formulae
          var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var d = R * c;
          distances[i] = d;
          if ( closest == -1 || d < distances[closest] ) {
            closest = i;
          }
        }
        $scope.distance = distances[closest]*1000;

        // Push closest Marker on the map
        $scope.markers.push({
          latitude: data[closest].lat,
          longitude: data[closest].long
        });
        $scope.close = data[closest];
        console.log(data[closest]);
      });
      $scope.$apply();
    });

    // Google maps new UI
    google.maps.visualRefresh = true;

    // Center of map (Ghent)
    $scope.center = {
      latitude: 51.0500,
      longitude: 3.7333
    };

    // Zoom factor
    $scope.zoom = 11;

    // Markers array
    $scope.markers = [];

    // Center map on resize
    google.maps.event.addDomListener(window, 'resize', function() {
      $scope.center;
      console.log('yay');
    });

    // 100% height
    $(function() {
      $(window).resize(function() {
        $('google-map').height($(window).height() - $('google-map').offset().top - 28);
      });
      $(window).resize();
    });
  });