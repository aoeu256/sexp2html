'use strict'


#require ['base/public/controllers.js'], (controllers) ->

describe 'Lisp2HTML Test', ->
	#  	scope = $rootScope.$new()
	#  	ctrl = $controller 'BodyCtrl', {'$scope':scope}
	
	it 'mock', ->
		expect(module).toBeDefined()
	scope = ctrl = null
	beforeEach(module('main.controllers'))
	beforeEach inject ($controller, $rootScope) ->
	 	scope = $rootScope.$new()
	 	ctrl = $controller 'BodyController', {'$scope':scope}
	it 'basic', ->	
		expect(ctrl).toBeDefined()
	it 'mwa', ->		
		expect(scope.startcode.length).toBeGreaterThan(2)
		expect(scope.formatted.length).toBeGreaterThan(scope.startcode.length)