'use strict';

angular.module('trashcanApp')
  .controller('TrashmapCtrl', function ($scope, Rest) {
    // get all trash
    $scope.trash = Rest.getAll().query({}, function(data) {
      for (var i=0; i<data.length; i++) {
        var lat = data[i].lat;
        var long = data[i].long;

        // push coords to makers array
        $scope.markers.push({
          latitude: lat,
          longitude: long
        });
      }
    });

    // google maps new UI
    google.maps.visualRefresh = true;

    // Center of map
    $scope.center = {
      latitude: 51,
      longitude: 4
    };

    // zoom factor
    $scope.zoom = 8;

    // markers array
    $scope.markers = [];
  });