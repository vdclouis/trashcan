'use strict';

angular.module('trashcanApp')
  .controller('ActivityCtrl', function ($scope, Rest, $location) {

    // Get all trash
    $scope.trash = Rest.getAll().query();

    // Delete trash

    $scope.delete = function(id) {
      Rest.get().remove({id: id}, {}, function() {
        $location.path('/');
      });
      console.log(id);
    };

  });
