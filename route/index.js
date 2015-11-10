'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var angularUtils = require('../util.js');


var Generator = module.exports = function Generator() {
    ScriptBase.apply(this, arguments);
    this.hookFor('angular-lazyload:controller');
    this.hookFor('angular-lazyload:view');
};

util.inherits(Generator, ScriptBase);

Generator.prototype.rewriteAppJs = function () {
    var config = {
        file: path.join(
            this.env.options.appPath,
            'scripts/routes.js'),
        needle: '/* add more routes */',
        splicable: [
        "   templateUrl: '/views/" + this.name.toLowerCase() + ".html',",
        "   dependencies: ['/scripts/controllers/" + this.name.toLowerCase() + ".js']"
        ]
    };

    config.splicable.unshift("'/" + this.name + "': {");
        config.splicable.push("},");

        angularUtils.rewriteFile(config);
    };
