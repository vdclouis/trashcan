'use strict';

angular.module('trashcanApp')
  .controller('ReportCtrl', function ($scope, $http) {

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
    /*$scope.trash = {};
    $scope.report = function () {
      addTrash.save($scope.trash, function() {
        $location.path('/');
      });
    };*/

    $scope.trash = {};
    $scope.report = function () {
      $http.post('http://slim:8888/api/report', $scope.trash)
        .success(function(data, status) {
          window.console.log('success:' + status);
        }).
        error(function(data, status) {
          window.console.log('error:' + status);
        });
    };
  });
