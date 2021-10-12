module.exports = function(grunt) {
    const config = require('./.screeps.json')
    
    grunt.initConfig({
      screeps: {
        options: {
          email: config.email,
          password: config.password,
          branch: config.branch,
          ptr: config.ptr
        },
        dist: {
          src: ['dist/*.js']
        }
      },
      ts: {
        default: {
          tsconfig: './tsconfig.json'
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-screeps');
    grunt.loadNpmTasks('grunt-ts')

    grunt.registerTask("run", ["ts"]);
    grunt.registerTask("upload", ["default", "screeps"]);
  }