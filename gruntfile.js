module.exports = function(grunt) {
  // Configure task(s)
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        build: {
          src: ['bower_components/bootstrap/src/js/*.js', 'bower_components/holderjs/holder.js'],
          dest: 'assets/js/script.min.js'
        },
        dev: {
          options: {
            beautify: true,
            mangle: false,
            compress: false,
            preserveComments: 'all'
          },
          // src: ['app/js/*.js', 'bower_components/holderjs/holder.js'],
          src: ['bower_components/bootstrap/src/js/*.js', 'bower_components/holderjs/holder.js'],
          dest: 'assets/js/script.min.js'
        }
      },
      sass: {
        build: {
          options: {
            outputStyle: 'compressed'
          },
          files: {
            'assets/css/styles-min.css' : 'app/scss/theme.scss'
          }
        },
        dev: {
          options: {
            outputStyle: 'expanded'
          },
          files: {
            'assets/css/styles.css' : 'app/scss/theme.scss'
          }
        } 
      },
      watch : {
          js: {
            files: ['app/js/*.js'],
            tasks: ['uglify:dev']
          },
          css: {
            files: ['app/scss/*.scss', 'bower_components/bootstrap/scss/*.scss'],
            tasks: ['sass:dev']
          }
      }
  });

  // Load the plugins
  grunt.loadNpmTasks ('grunt-contrib-uglify');
  grunt.loadNpmTasks ('grunt-sass');
  grunt.loadNpmTasks ('grunt-contrib-watch');

  // Register task(s)
  grunt.registerTask('default', ['uglify:dev','sass:dev']);
  grunt.registerTask('build', ['uglify:build','sass:build']);
};
