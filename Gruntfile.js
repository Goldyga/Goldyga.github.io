module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({ 

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      target1: ['imagemin'],
      target2: [['watch'], 'browserSync']
    }, 
    
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'css/main.css': 'scss/main.scss'
            }
        }
    },

    imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'img/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'imageMin/'
  			}]
  		}
  	},

    watch: {
      scripts: {
          files: ['scss/*.scss'],
          tasks: ['sass','imagemin'],
          options: {
              spawn: false,
              livereload: true
          },
      }
    }, 

    browserSync: {
      bsFiles: {
          src : ['css/*.css',
                '*html']
      },
      options: {
          server: {
              baseDir: ""
          }
      }
    }

});
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default task(s).
  grunt.registerTask('default', ['concurrent:target1', 'concurrent:target2']);
};