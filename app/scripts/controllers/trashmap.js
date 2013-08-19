'use strict';

angular.module('trashcanApp')
  .controller('TrashmapCtrl', function ($scope, Rest) {
    // Get all trash
    $scope.trash = Rest.getAll().query({}, function(data) {
      for (var i=0; i<data.length; i++) {
        var lat = data[i].lat;
        var long = data[i].long;

        // Push coords to makers array
        $scope.markers.push({
          latitude: lat,
          longitude: long
        });
      }
    });

    // Google maps new UI
    google.maps.visualRefresh = true;

    // Center of map
    $scope.center = {
      latitude: 51.0500,
      longitude: 3.7333
    };

    // Zoom factor
    $scope.zoom = 11;

    // Markers array
    $scope.markers = [];

    //
    google.maps.event.addDomListener(window, 'resize', function() {
      $scope.center;
      console.log('yay');
    });

    // Resize map to 100% height
    $(function() {
      $(window).resize(function() {
        $('google-map').height($(window).height() - $('google-map').offset().top - 55);
      });
      $(window).resize();
    });
  });