'use strict';

angular.module('trashcanApp')
  .factory('getAll', function ($resource) {
    return $resource('http://slim\\:8888/api/activity',{},{});
  })
  .factory('addTrash', function($resource) {
    return $resource('http://slim\\:8888/api/report',{},{});
  });