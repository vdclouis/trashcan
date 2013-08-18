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
      latitude: 51,
      longitude: 4
    };

    // Zoom factor
    $scope.zoom = 8;

    // Markers array
    $scope.markers = [];
  });