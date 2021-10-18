module.exports = function(grunt) {
    const config = require('./.screeps.json')
    
    grunt.initConfig({
      eslint: {
        options: {
          configFile: '.eslintrc.yaml',
        },
        target: ['src/**/*.ts']
      },
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
  
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-screeps');
    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask("build", ["eslint", "ts"]);
    grunt.registerTask("up", ["build", "screeps"]);
  }