'use strict';

angular.module('trashcanApp')
  .controller('ReportCtrl', function ($scope, $location, Rest) {

    // Get location
    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.trash = { lat: pos.coords.latitude, long: pos.coords.longitude };
      $scope.$apply();
    });

    //Style file input
    //$(':file').filestyle();

    //Save new trash
    $scope.report = function () {
      Rest.addTrash().save($scope.trash, function() {
        $location.path('/');
      });
    };
  });
