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
          src: ['src/*.js']
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-screeps');
  }