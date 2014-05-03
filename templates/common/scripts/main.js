/*jshint unused: vars */
require.config({
  paths: {
      'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
      'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
      'angular-route': '../bower_components/angular-route/angular-route',
      'angular-resource': '../bower_components/angular-resource/angular-resource',
      'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
      'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
      'angular' : '../bower_components/angular/angular',
  },
  shim: {
    'angular' : {'exports' : 'angular'}<% if (routeModule) { %>,
    'angular-route': ['angular']<% } %><% if (cookiesModule) { %>,
    'angular-cookies': ['angular']<% } %><% if (sanitizeModule) { %>,
    'angular-sanitize': ['angular']<% } %><% if (resourceModule) { %>,
    'angular-resource': ['angular']<% } %>,
    'angular-mocks': {
      deps:['angular'],
      'exports':'angular.mock'
    }
  },
  priority: [
    'angular'
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app'<% if (routeModule) { %>,
  'angular-route'<% } %><% if (cookiesModule) { %>,
  'angular-cookies'<% } %><% if (sanitizeModule) { %>,
  'angular-sanitize'<% } %><% if (resourceModule) { %>,
  'angular-resource'<% } %>
], function(angular, app<% if (routeModule) { %>, ngRoutes<% } %><% if (cookiesModule) { %>, ngCookies<% } %><% if (sanitizeModule) { %>, ngSanitize<% } %><% if (resourceModule) { %>, ngResource<% } %>) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});