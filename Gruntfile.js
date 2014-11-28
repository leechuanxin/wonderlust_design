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
        files: 'assets/less/*', // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    cssmin: {
      files: {
        src: 'assets/css/wonderlust.css',
        dest: 'assets/css/wonderlust.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Compilation tasks
  grunt.registerTask('default', ['less', 'cssmin']);
  grunt.registerTask('wonderlust', ['less', 'cssmin']);
};