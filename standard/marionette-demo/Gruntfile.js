/*global module:false, require:false, console:false*/
var pkg = require('./package.json');

module.exports = function(grunt) {
  grunt.template.addDelimiters('handlebars-like-delimiters', '{{', '}}');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        stripBanners: true,
        sourceMap: true
      },
      dist: {
        src: [
          "contact-model.js",
          "contact-collection.js",
          "contact-detail-view.js",
          "contact-form-view.js",
          "contact-list-view.js",
          "contact-view.js",
          "contact-composite-view.js",
          "router.js",
          "app.js",
          ],
        dest: 'standard.js'
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
    },
    uglify: {
      dist: {
        options: {
          sourceMap: true,
          sourceMapIn: '<%= concat.dist.dest %>.map'
        },
        files: {
          'standard.min.js' : ['<%= concat.dist.dest %>']
        }
      }
    },
    watch: {
      // After the files have been concatonated, uglify them
      cat_files: {
        files: '<%= concat.dist.dest %>',
        tasks: ['uglify:dist']
      },
      src_code: {
        files: ['<%= concat.dist.src %>'],
        tasks: ['concat:dist']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('work', ['connect', 'concat', 'uglify', 'watch'] );
};
