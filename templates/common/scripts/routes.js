define([], function(){
    'use strict';
    return {
        defaultRoutePaths: '/',
        routes: {
            /* add more routes */
            '/': {
                templateUrl: '/views/main.html',
                dependencies: [
                    '/scripts/controllers/main.js'
                ]
            }
        }
    };
});