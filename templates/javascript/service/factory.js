define(['app'], function (app) {
  'use strict';

  app.factory('<%= cameledName %>', function () {
      // Service logic
      // ...

      var meaningOfLife = 42;

      // Public API here
      return {
        someMethod: function () {
          return meaningOfLife;
        }
      };
    });
});
