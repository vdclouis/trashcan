'use strict';

angular.module('trashcanApp')
  .controller('InitCtrl', function ($scope, $location) {

    // Active link checker
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });