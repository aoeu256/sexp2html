'use strict';

var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

//require(['base/build/controllers'], function(controllers) {
define(['main', 'controllers', 'lisp2html'], function(main, controllers, lisp2html) { 
  describe('Lisp2HTML Test', function() {
    it('angular', function() {
      return expect(angular).toBeDefined();
    });
    it('mock', function() {
      return expect(module).toBeDefined();
    });
    beforeEach(module('main.controllers'));
    beforeEach(inject(function($controller, $rootScope) {
      var ctrl, scope;
      scope = $rootScope.$new();
      return ctrl = $controller('BodyCtrl', {
        '$scope': scope
      });
    }));
    return it('basic', function() {
      var mod;
      mod = module('main');
      expect(mod).toBeDefined();
      expect(controllers).toBeDefined();
      mod.$controller('BodyCtrl', {
        '$scope': scope
      });
      expect(scope.startcode.length).toBeGreaterThan(2);
      return expect(scope.formatted.length).toBeGreaterThan(scope.startcode.length);
    });
  });
});
