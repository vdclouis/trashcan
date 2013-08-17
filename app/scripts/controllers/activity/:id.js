'use strict';

angular.module('trashcanApp')
  .controller('ActivityIdCtrl', function ($scope, Rest, $routeParams) {
    Rest.getAll().query({id: $routeParams.id}, function(trash) {
      $scope.trash = trash[0];
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