'use strict';

angular.module('trashcanApp')
  .controller('ActivityIdCtrl', function ($scope, Rest, $routeParams) {
    Rest.getAll().query({id: $routeParams.id}, function(trash) {
      $scope.trash = trash[0];
    });
  });
