'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var angularUtils = require('../util.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createDirectiveFiles = function createDirectiveFiles() {
  this.generateSourceAndTest(
    'directive',
    'spec/directive',
    'directives',
    true	// Skip adding the script to the index.html file of the application
  );
};

// Re-write the main app module to account for our new dependency
Generator.prototype.injectDependenciesToApp = function () {
  /*angularUtils.injectIntoFile(
    this.env.options.appPath, 
    'directives/' + this.name.toLowerCase(), 
    this.classedName + 'Directive', 
    this.scriptAppName + '.directives.' + this.classedName
  );/**/
};
