/*global module:false, require:false, console:false*/
var pkg = require('./package.json');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          "browserified.js": ['app.js']
        },
        options: {
          watch: true,
          keepAlive: true
        }
        // Note: The entire `browserify-shim` config is inside `package.json`.
      }
    },
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
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('work', ['connect:http', 'browserify:dist' ] );
};
