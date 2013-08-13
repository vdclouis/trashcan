'use strict';

angular.module('trashcanApp')
  .controller('ReportCtrl', function ($scope, $location, addTrash) {

    // Get location
    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.lat = pos.coords.latitude;
      $scope.lon = pos.coords.longitude;
    });

    // Style file input
    $(':file').filestyle({
      input: false,
      icon: true,
      buttonText: 'Take picture'
    });

    // Save new trash
    $scope.report = function () {
      addTrash.save($scope.trash, function() {
        $location.path('/');
      });
    };
  });
