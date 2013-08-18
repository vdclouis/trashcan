'use strict';

angular.module('trashcanApp', ['ngResource', 'ngRoute', 'ngAnimate', 'google-maps'])
  .config(function($httpProvider){

    // CORS
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // Serialize data
    $httpProvider.defaults.transformRequest = function (data) {
      var str = [];
      for (var p in data) {
        data[p] !== undefined && str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
      }
      return str.join('&');
    };
    // Set header for PUT and POST
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
      .when('/activity/:id', {
        templateUrl: 'views/activity/:id.html',
        controller: 'ActivityIdCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
