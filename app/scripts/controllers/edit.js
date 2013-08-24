'use strict';

angular.module('trashcanApp')
  .controller('EditCtrl', function ($scope, $routeParams, Rest, $location) {

    // Get data for specific trash
    Rest.get().query({id: $routeParams.id}, {}, function(trash) {
      $scope.trash = trash[0];
      $scope.trash.type = $scope.trash.type.split(',');
    });

    $scope.types = [
      { name: 'Rest' },
      { name: 'PMD' },
      { name: 'GFT' },
      { name: 'KGA' },
      { name: 'Glas' },
      { name: 'Karton' }
    ];

    // Edit trash
    $scope.edit = function(id) {
      Rest.editTrash().edit({id: id}, {}, function(){
        $location.path('/activity');
      });
    };

  });
