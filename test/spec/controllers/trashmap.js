'use strict';

describe('Controller: TrashmapCtrl', function () {

  // load the controller's module
  beforeEach(module('trashcanApp'));

  var TrashmapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrashmapCtrl = $controller('TrashmapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
