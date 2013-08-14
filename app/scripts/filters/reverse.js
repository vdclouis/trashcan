'use strict';

angular.module('trashcanApp')
  .filter('reverse', function () {
    return function (input) {
      return input.split('').reverse().join('');
    };
  });
