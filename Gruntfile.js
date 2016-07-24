module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Watch task config
    watch: {
      sass: {
        files: "app/scss/*.scss",
        tasks: ['sass']
      }
    },
    
    watch: {
      less: {
        files: "app/less/*.less",
        tasks: ['less']
      }
    },
    // SASS task config
    sass: {
        dev: {
            files: {
                // destination         // source file
                "app/css/styles.css" : "app/scss/styles.scss"
            }
        }
    },
    //LESS Task config
        less: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    //destination         //source file
                    "app/css/main.css": "app/less/main.less"
                }
            },
            prod: {
                options: {
                    style: 'compressed'
                },
                files: {
                    "app/css/main.min.css": "app/less/main.min.less"
                }
            }
        },
    // FOLDER
      mkdir: {
    all: {
        options: {
            create: [
                'app/css',
                'app/sass',
                'app/less',
                'img',
                'js',
                'jquery',
                'app/css/bootstrap'
            ]
        }
    }
},
  });
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', [
      'mkdir',
      'sass',
      'less',
      'watch'
  ]);
};