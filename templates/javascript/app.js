/*jshint unused: vars */

define(['angular']/*deps*/, function (angular)/*invoke*/ {
  'use strict';

  var app = angular.module('<%= scriptAppName %>', [/*angJSDeps*/<%= angularModules %>])<% if (ngRoute) { %>
    .config(['$routeProvider', '$controllerProvider', '$provide',function ($routeProvider, $controllerProvider, $provide) {

      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          resolve: resolveController(['controllers/main'])
        })
        .otherwise({
          redirectTo: '/'
        });
    }])<% } %>;
	return app;
});
