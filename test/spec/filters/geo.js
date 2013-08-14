'use strict';

describe('Filter: geo', function () {

  // load the filter's module
  beforeEach(module('trashcanApp'));

  // initialize a new instance of the filter before each test
  var geo;
  beforeEach(inject(function ($filter) {
    geo = $filter('geo');
  }));

  it('should return the input prefixed with "geo filter:"', function () {
    var text = 'angularjs';
    expect(geo(text)).toBe('geo filter: ' + text);
  });

});
