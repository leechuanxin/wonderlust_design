module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          strictMath: true,
          relativeUrls: true,
          sourceMap: true,
          sourceMapFilename: 'css/wonderlust.css.map',
          sourceMapRootpath: '..'
        },
        files: {
          // target.css file: source.less file
          "css/wonderlust.css": "less/wonderlust.less"
        }
      }
    },
    watch: {
      styles: {
        files: 'less/**/*', // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    cssmin: {
      files: {
        src: 'css/wonderlust.css',
        dest: 'css/wonderlust.min.css'
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