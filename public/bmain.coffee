'use strict'
# browersify main


#angular = require('./angular')
#route = require('angular-route/angular-route')
#sanitize = require('angular-sanitize/angular-sanitize')
#cookies = require('angular-cookies/angular-cookies')


#controllers = require('./controllers.coffee')

apple = 22

angular.module('main', ["ngSanitize", "ngRoute", 'main.controllers'])
	.config(['$routeProvider', ($routeProvider) ->
			#$routeProvider.when('/view1', {templateURL:'main.html', controllers: 'DumbController'})
		])
	#.constant('version', require('../package.json').version)

#	$routeProvider.when('/')
#controllers = require('../build/controllers')