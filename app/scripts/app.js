'use strict';

angular.module('trashcanApp', ['ngResource'])
  .config(function($httpProvider){

    // CORS
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.defaults.transformRequest = function (data) {
      var str = [];
      for (var p in data) {
        data[p] !== undefined && str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
      }
      return str.join('&');
    };
    $httpProvider.defaults.headers.put['Content-Type'] = $httpProvider.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded; charset=UTF-8';
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
