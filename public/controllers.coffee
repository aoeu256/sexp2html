'use strict'

#main = require('main')
#lisp2html = require('../build/lisp2html')
#angular.module('main.controllers', ['tohtml'])
#	.controller 'BodyController', ['$scope', 'tohtml', ($scope, tohtml) ->
#angular = require('./angular')

angular.module('main.controllers', ['tohtml'])	
	.controller 'BodyController', ['$scope', 'tohtml', 'tokenize', ($scope, tohtml, tokenize) ->
		$scope.bb = "(defun myadd [a b]\\n" + "  (+ 2 3))"
		$scope.raw = ''
		
		$scope.startcode = $.get "test.clj", (data) ->
			$scope.$apply ->
				$scope.raw = data
				$scope.tokens = tokenize(data)
				$scope.formatted = tohtml(data)
			]
	#.controller 'DumbController', ($scope) -> alert 'bitch be dumb'
	#	.controller 'DumbController', ['$scope', ($scope) ->
	#		alert 'bitch be dumb'
	#	]