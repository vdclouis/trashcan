'use strict';

describe('Controller: NearmeCtrl', function () {

  // load the controller's module
  beforeEach(module('trashcanApp'));

  var NearmeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NearmeCtrl = $controller('NearmeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
