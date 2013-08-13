'use strict';

angular.module('trashcanApp', ['ngResource'])
  .config(function($httpProvider){

    // CORS
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // Change default header content type for post request
    $httpProvider.defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded'};

    // Transform every request to form urlencoded data
    $httpProvider.defaults.transformRequest = function(data){
      if (data === undefined) {
        return data;
      }
      // Jquery rescue !!!!!
      return $.param(data);
    };
   })
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/activity', {
        templateUrl: 'views/activity.html',
        controller: 'ActivityCtrl'
      })
      .when('/nearme', {
        templateUrl: 'views/nearme.html',
        controller: 'NearmeCtrl'
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl'
      })
      .when('/trashmap', {
        templateUrl: 'views/trashmap.html',
        controller: 'TrashmapCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
