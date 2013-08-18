'use strict';

angular.module('trashcanApp')
  .controller('ActivityIdCtrl', function ($scope, Rest, $routeParams) {
    // Get detail of trash based on url
    Rest.getAll().query({id: $routeParams.id}, function(trash) {
      $scope.trash = trash[0];

      $scope.la = $scope.trash.lat;
      $scope.lo = $scope.trash.long;

      // Push current marker
      $scope.markers.push({
       latitude: $scope.la,
       longitude: $scope.lo
       });

      // Map center on marker
      $scope.center = {
        latitude: $scope.la,
        longitude: $scope.lo
      };
    });

    // Google maps new UI
    google.maps.visualRefresh = true;

    // map center init
    $scope.center = {
      latitude: 51,
      longitude: 4
    };

    // Zoom factor
    $scope.zoom = 10;

    // Markers array
    $scope.markers = [];
  });