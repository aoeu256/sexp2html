#require ['base/public/controllers.js'], (controllers) ->

describe 'tohtmltest', ->
		
	beforeEach(angular.mock.module('lisp2html'))	
	beforeEach inject ($tokenize, $tohtml) ->
		[tohtml, tokenize] = [$tokenize, $tohtml]

	it 'tokens', ->
		expect(tohtml).toBeDefined()

	#  	scope = $rootScope.$new()
	#  	ctrl = $controller 'BodyCtrl', {'$scope':scope}
	
	#beforeEach(module('main.controllers'))
	#beforeEach inject ($controller, $rootScope) ->
	 	#scope = $rootScope.$new()
	 	#ctrl = $controller 'BodyController', {'$scope':scope}
	# it 'mock', ->
	# 	expect(module).toBeDefined()
	# scope = ctrl = null
