module.exports = function(grunt) {


    grunt.initConfig({
 
        pkg: grunt.file.readJSON('package.json'),
 
        meta: {
            //basePath: '../'
        },
         
        concat: {
            options: {
                stripBanners: true,
                separator: ';'
            },
            dist: {
                src: [
                        '../../plugins/eb-chartjs.js',
                        '../../angular/eb-chartjs.angular.js',
                ],
                dest: '../lib/eb-chartjs.angular-all.js'
            }
        },
        
        uglify: {
          options: {
            banner: '/* Angular <%= pkg.description %> ' +
                '(<%= grunt.template.today("yyyy-mm-dd") %>) ' +
                '(c) 2014 - <%= grunt.template.today("yyyy") %> Enterprise Blocks, Inc. ' +
                'License details : <%= pkg.license %> */'
            },
          dist: {
            files: {
                '../lib/eb-chartjs.angular-all.min.js': ['../lib/eb-chartjs.angular-all.js']
            }
          }
        }
        
    });
 
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['concat', 'uglify']);
 
};