(function () {
  'use strict';
}());

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['server.js', 'Gruntfile.js', 'index.html'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
   watch: {
      files: ['server.js', 'Gruntfile.js', 'index.html'],
      tasks: ['jshint']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jshint']);
};