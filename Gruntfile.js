module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          strictMath: true,
          relativeUrls: true,
          sourceMap: true,
          sourceMapFilename: 'assets/css/wonderlust.css.map',
          sourceMapRootpath: '../..'
        },
        files: {
          // target.css file: source.less file
          "assets/css/wonderlust.css": "assets/less/wonderlust.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['assets/less/*'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Compilation tasks
  grunt.registerTask('default', ['less']);
  grunt.registerTask('wonderlust', ['less']);
};