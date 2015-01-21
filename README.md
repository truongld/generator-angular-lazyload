# AngularJS-Lazyload generator

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![Build Status](https://travis-ci.org/truongld/generator-angular-lazyload.png?branch=master)](https://travis-ci.org/truongld/generator-angular-lazyload)

> Yeoman generator for AngularJS using RequireJS for Lazyload - lets you quickly set up a project with sensible defaults and best practises.


## Usage

Install `generator-angular-lazyload`:
```
npm install -g generator-angular-lazyload
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo angular-lazyload`, optionally passing an app name:
```
yo angular-lazyload [app-name]
```

`grunt build` must be run before anything else due to dependency population in the RequireJS config and the like (this will be fixed in a future version).

Run `grunt` for building and `grunt serve` for preview


## Generators

Available generators:

* [angular-lazyload](#app) (aka [angular-lazyload:app](#app))
* [angular-lazyload:controller](#controller)
* [angular-lazyload:directive](#directive)
* [angular-lazyload:filter](#filter)
* [angular-lazyload:route](#route)
* [angular-lazyload:service](#service)
* [angular-lazyload:provider](#service)
* [angular-lazyload:factory](#service)
* [angular-lazyload:value](#service)
* [angular-lazyload:constant](#service)
* [angular-lazyload:decorator](#decorator)
* [angular-lazyload:view](#view)

**Note: Generators are to be run from the root directory of your app.**

### App
Sets up a new AngularJS-RequireJS app, generating all the boilerplate you need to get started. The app generator also optionally installs Twitter Bootstrap and additional AngularJS modules, such as angular-resource (installed by default). All files created will be in the RequireJS/AMD format, and therefore all will be within "define" blocks.

Example:
```bash
yo angular-lazyload
```

### Route
Generates a controller and view, and configures a route in `app/scripts/app.js` connecting them.

Example:
```bash
yo angular-lazyload:route myroute
```

Produces `app/scripts/controllers/myroute.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.controllers.myrouteCtrl', [])
    .controller('myrouteCtrl', function ($scope) {
      // ...
    });
});
```

Produces `app/views/myroute.html`:
```html
<p>This is the myroute view</p>
```

### Controller
Generates a controller in `app/scripts/controllers`.

Example:
```bash
yo angular-lazyload:controller user
```

Produces `app/scripts/controllers/user.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.controllers.userCtrl', [])
    .controller('userCtrl', function ($scope) {
      // ...
    });
});
```
### Directive
Generates a directive in `app/scripts/directives`.

Example:
```bash
yo angular-lazyload:directive myDirective
```

Produces `app/scripts/directives/myDirective.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.directives.myDirective', [])
    .directive('myDirective', function () {
      return {
        template: '<div></div>',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
          element.text('this is the myDirective directive');
        }
      };
    });
  });
```

### Filter
Generates a filter in `app/scripts/filters`.

Example:
```bash
yo angular-lazyload:filter myFilter
```

Produces `app/scripts/filters/myFilter.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.filters.myFilter', [])
    .filter('myFilter', function () {
      return function (input) {
        return 'myFilter filter:' + input;
      };
    });
});
```

### View
Generates an HTML view file in `app/views`.

Example:
```bash
yo angular-lazyload:view user
```

Produces `app/views/user.html`:
```html
<p>This is the user view</p>
```

### Service
Generates an AngularJS service.

Example:
```bash
yo angular-lazyload:service myService
```

Produces `app/scripts/services/myService.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.services.myService', [])
    .service('myService', function () {
      // ...
    });
});
```

You can also do `yo angular:factory`, `yo angular:provider`, `yo angular:value`, and `yo angular:constant` for other types of services.

### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo angular-lazyload:decorator serviceName
```

Produces `app/scripts/decorators/serviceNameDecorator.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.decorators.serviceName', [])
    .config(function ($provide) {
      $provide.decorator('serviceName', function ($delegate) {
        // ...
        return $delegate;
      });
    });
});
```

## Options
In general, these options can be applied to any generator, though they only affect generators that produce scripts.

### CoffeeScript
CoffeeScript is not supported at this time. Sorry. We'll take a look at CoffeeScript possibly being added at a later date.

### What happened to the Minification Safe option?

**Deprecated**

[Related Issue #452](https://github.com/yeoman/generator-angular/issues/452): This option has been removed in accordance with this issue on GitHub. The recommended build process uses `ngmin`, a tool that automatically adds these annotations. However, if you'd rather not use `ngmin`, you have to add these annotations manually yourself. **One thing to note is that `ngmin` does not produce minsafe code for things that are not main level elements like controller, services, providers, etc.:
```javascript
resolve: {
  User: function(myService) {
    return MyService();
  }
}
```

will need to be manually done like so:
```javascript
resolve: {
  User: ['myService', function(myService) {
    return MyService();
  }]
}
```

## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-mocks
* angular-scenario


The following additional modules are available as components on bower, and installable via `bower install`:

* angular-cookies
* angular-loader
* angular-resource
* angular-sanitize

All of these can be updated with `bower update` as new versions of AngularJS are released.

As part of the `grunt build` command, bower dependencies are inserted into the `bootstrap.js` file using the `bower:app` task specified in the Gruntfile. The `test-bootstrap.js` file is taken care of by keeping it's dependencies in line with `bootstrap.js`. This is handled by the `replace:test` task within the Gruntfile.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

### Output
You can change the `app` directory by adding a `appPath` property to `bower.json`. For instance, if you wanted to easily integrate with Express.js, you could add the following:

```json
{
  "name": "yo-test",
  "version": "0.0.0",
  ...
  "appPath": "public"
}

```
This will cause Yeoman-generated client-side files to be placed in `public`.

## Testing

Running `grunt test` will run the unit tests with karma.

## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a PR, make sure that the commit messages match the [AngularJS conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/).

When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/aaronallport/generator-angular-require/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## And finally

Much <3 to the Yeoman community for creating such a great tool!

If you like generator-angular-lazyload, please tell your friends and colleagues. If you are writing about or mentioning generator-angular-require, let me know and I will happily link to it from here.

Thank you!
