'use strict';

angular.module('trashcanApp')
  .controller('ActivityCtrl', function ($scope, Rest) {
    $scope.trash = Rest.getAll().query();
  });
