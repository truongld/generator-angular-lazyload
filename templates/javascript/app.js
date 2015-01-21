/*jshint unused: vars */

define(['angular']/*deps*/, function (angular)/*invoke*/ {
  'use strict';

  var app = angular.module('<%= scriptAppName %>', [/*angJSDeps*/<%= angularModules %>])<% if (ngRoute) { %>
  .config(
    [
	'$routeProvider',
	'$locationProvider',
	'$controllerProvider',
	'$compileProvider',
	'$filterProvider',
	'$provide',
	function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
		
		app.controller = $controllerProvider.register;
		app.directive  = $compileProvider.directive;
		app.filter     = $filterProvider.register;
		app.factory    = $provide.factory;
		app.service    = $provide.service;
		
		//$locationProvider.html5Mode(true).hashPrefix('!');
		
		$routeProvider
		.when('/', {
		  templateUrl: 'views/main.html',
		  resolve: resolveController(['controllers/main'])
		})
		.otherwise({
		  redirectTo: '/'
		});
    	}
  ])<% } %>;
  return app;
});
