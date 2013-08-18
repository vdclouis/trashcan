'use strict';

angular.module('trashcanApp')
  .factory('Rest', function ($resource) {
    return{
      getAll: function() {
        var Rest = $resource('http://slim:8888/api/activity/:id',{
          id: '@id'
        },{});
        return Rest;
      },
      addTrash: function() {
        var Rest = $resource('http://slim:8888/api/report',{},{});
        return Rest;
      },
      addUser: function() {
        var Rest = $resource('http://slim:8888/api/register',{},{});
        return Rest;
      }
    };
  });