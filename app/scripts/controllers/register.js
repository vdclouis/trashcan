'use strict';

angular.module('trashcanApp')
  .controller('RegisterCtrl', function ($scope, Rest, $location) {

    //$scope.user = {registered: moment().format()};
    //console.log($scope.user.registered);

    // Register new user
    $scope.register = function () {
      Rest.addUser().save($scope.user, function() {
        $location.path('/');
      });
    };
  });
