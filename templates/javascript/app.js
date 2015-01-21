/*jshint unused: vars */

define(['angular']/*deps*/, function (angular)/*invoke*/ {
  'use strict';

  var app = angular.module('<%= scriptAppName %>', [/*angJSDeps*/<%= angularModules %>])<% if (ngRoute) { %>
    .config(function ($routeProvider, $controllerProvider, $provide) {
      
      $locationProvider.html5Mode(true).hashPrefix('!');
      
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          resolve: resolveController(['controllers/main'])
        })
        .otherwise({
          redirectTo: '/'
        });
    })<% } %>;
	return app;
});
