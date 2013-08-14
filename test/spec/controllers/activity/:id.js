'use strict';

describe('Controller: ActivityIdCtrl', function () {

  // load the controller's module
  beforeEach(module('trashcanApp'));

  var ActivityIdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivityIdCtrl = $controller('ActivityIdCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
