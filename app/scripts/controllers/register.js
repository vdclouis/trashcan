'use strict';

angular.module('trashcanApp')
  .controller('RegisterCtrl', function ($scope, $location, Rest) {

    $scope.user = { registered: moment().format() };
    console.log($scope.user.registered);

    // Register new user
    $scope.register = function () {
      Rest.addNewUser().save($scope.user, function() {
        $location.path('/');
      });
    };
  });
