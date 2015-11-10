/*jshint unused: vars */

define(['angular','routes']/*deps*/, function (angular, configRoutes)/*invoke*/ {
	'use strict';

	var app = angular.module('<%= scriptAppName %>', [/*angJSDeps*/<%= angularModules %>]);<% if (ngRoute) { %>
	app.config([
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

			// enable below line for enable html5 mode
			// $locationProvider.html5Mode(true);

			/* resolve controller function for lazyload */
			var resolveController = function (dependencies){
				return {
					load: ['$q', '$rootScope', function ($q, $rootScope) {
						var defer = $q.defer();
						require(dependencies, function () {
							$rootScope.$apply(function() {
								defer.resolve();
							});
						});
						return defer.promise;
					}]
				};
			};

			if (configRoutes.routes !== undefined){
				angular.forEach(configRoutes.routes, function(route, path)
				{
					$routeProvider.when(path, {templateUrl: route.templateUrl, resolve: resolveController(route.dependencies)});
				});
			}

			if (configRoutes.defaultRoutePaths !== undefined){
				$routeProvider.otherwise({redirectTo: configRoutes.defaultRoutePaths});
			}
		}
	]);<% } %>
	return app;
});
