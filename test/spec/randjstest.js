'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('lisp2html'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('BodyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.raw.length).toBeGreaterThan(2);
  });
});
