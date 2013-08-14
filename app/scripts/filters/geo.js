'use strict';

angular.module('trashcanApp')
  .filter('geo', function () {
    return function (input) {
      var z = input.toString();         // string
      var y = z.split(".");             // split on .
      var d = y[0];                     // get first digits
      var b = '0.' + y[1];              // paste 0. before second part
      var a = b * 60;                   // get na comma * 60
      var c = a.toString().split(".");  // to string and split on .
      var m = c[0];                     // get first part
      var u = '0.' + c[1];              // paste 0. before second part
      var e = u * 60;                   // multiply by 60
      var es = e.toString();            // convert to string
      var s = Math.round(es);           // round

      return d + '°' + ' ' + m + "'" + ' ' + s + '"';
    };
  });