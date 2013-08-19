'use strict';

angular.module('trashcanApp')
  .controller('ReportCtrl', function ($scope, $location, Rest) {

    // Get location
    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.trash = { lat: pos.coords.latitude, long: pos.coords.longitude };
      $scope.$apply();
    });

    // Save new trash
    $scope.report = function () {
      Rest.addTrash().save($scope.trash, function() {
        $location.path('/');
      });
    };

    // Set API key
    filepicker.setKey('APaFUoqMXQQWpfo22DQyHz');

    // Upload img and save url
    $scope.ink = function() {
      filepicker.pick({
        container: 'modal',
        services:['COMPUTER']
      },
      function(InkBlob){
        //console.log(InkBlob.url);
        $scope.trash.picture = InkBlob.url;
        $scope.$apply();
      },
      function(FPError){
        console.log(FPError.toString());
      });
    }
  });
