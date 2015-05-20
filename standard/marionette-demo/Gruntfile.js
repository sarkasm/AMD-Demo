/*global module:false, require:false, console:false*/
var pkg = require('./package.json');

module.exports = function(grunt) {
  grunt.template.addDelimiters('handlebars-like-delimiters', '{{', '}}');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      http: {
        options: {
          base: '.',
          protocol: 'http',
          port: 8000
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('work', ['connect:http:keepalive'] );
};
