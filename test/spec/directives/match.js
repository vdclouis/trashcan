'use strict';

describe('Directive: match', function () {
  beforeEach(module('trashcanApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<match></match>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the match directive');
  }));
});
