'use strict'

#require('angular/angular')
#require('angular-route/angular-route')
#require('angular-sanitize/angular-sanitize')
#require('angular-cookies/angular-cookies')
angular.module('main', ["ngSanitize", "ngRoute", "main.controllers", "tohtml"])
	.config ['$routeProvider', ($routeProvider) ->
		$routeProvider.when('/view1', {templateURL:'main.html', controllers: 'DumbController'})
	]
#	$routeProvider.when('/')
#controllers = require('../build/controllers')

#module.exports = -> app