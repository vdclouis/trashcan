'use strict';

angular.module('trashcanApp')
  .factory('Rest', function ($resource) {
    return{
      get: function() {
        var Rest = $resource('http://slim:8888/api/activity/:id',
          { id: '@id' },
          {}
        );
        return Rest;
      },
      getAll: function() {
        var Rest = $resource('http://slim:8888/api/activities', {}, {});
        return Rest;
      },
      addTrash: function() {
        var Rest = $resource('http://slim:8888/api/report',{},{});
        return Rest;
      },
      addNewUser: function() {
        var Rest = $resource('http://slim:8888/api/register',{},{});
        return Rest;
      },
      editTrash: function() {
        var Rest = $resource('http://slim:8888/api/edit/:id',
          { id: '@id' },
          { edit: { method: 'PUT' } }
        );
        return Rest;
      }
    };
  });