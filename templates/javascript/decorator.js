define(['app'], function (app) {
  'use strict';

  app.config(function ($provide) {
      $provide.decorator('<%= cameledName %>', function ($delegate) {
          // decorate the $delegate
          return $delegate;
      });
    });
});
