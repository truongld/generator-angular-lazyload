define(['app'], function (app) {
  'use strict';

  app.filter('<%= cameledName %>', function () {
      return function (input) {
      	return '<%= cameledName %> filter: ' + input;
      };
  	});
});
