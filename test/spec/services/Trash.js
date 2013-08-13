'use strict';

describe('Service: Trash', function () {

  // load the service's module
  beforeEach(module('trashcanApp'));

  // instantiate service
  var Trash;
  beforeEach(inject(function (_Trash_) {
    Trash = _Trash_;
  }));

  it('should do something', function () {
    expect(!!Trash).toBe(true);
  });

});
