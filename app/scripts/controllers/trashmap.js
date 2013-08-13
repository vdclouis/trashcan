'use strict';

angular.module('trashcanApp')
  .controller('TrashmapCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    angular.extend($scope, {
			center: {
				latitude: 51, // initial map center latitude
				longitude: 3.5, // initial map center longitude
			},
			markers: [], // an array of markers,
			zoom: 8, // the zoom level
		});
		
		google.maps.visualRefresh = true;
		
		
        
  });
