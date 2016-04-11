module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      watch: {
        client: {
          files: ['app/html/*.html', 'app/css/*.css', 'app/js/*.js'],
          options: {
            livereload: true
          }
        }
      }
    })

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
}
