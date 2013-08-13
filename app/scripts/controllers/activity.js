'use strict';

angular.module('trashcanApp')
  .controller('ActivityCtrl', function ($scope, getAll) {
    $scope.trash = getAll.query();
  });
