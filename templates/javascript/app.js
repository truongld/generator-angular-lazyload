/*jshint unused: vars */
define(['angular']/*deps*/, function (angular)/*invoke*/ {
  'use strict';

  var app = angular.module('<%= scriptAppName %>', [/*angJSDeps*/<%= angularModules %>])<% if (ngRoute) { %>
    .config(['$routeProvider', '$controllerProvider', '$provide',function ($routeProvider, $controllerProvider, $provide) {
		function resolveController(names) {
		    return {
		        load: ['$q', '$rootScope', function ($q, $rootScope) {
		            var defer = $q.defer();
		            require(names, function () {
		                defer.resolve();
		                $rootScope.$apply();
		            });
		            return defer.promise;
		        }]
		    }
		}
		
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          resolve: resolveController(['MainCtrl'])
        })
        .otherwise({
          redirectTo: '/'
        });
    }])<% } %>;
	return app;
});
