module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
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

  grunt.registerTask('default', ['watch']);
};