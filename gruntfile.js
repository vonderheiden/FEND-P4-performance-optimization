module.exports = function(grunt) {

    //var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: [
                'Gruntfile.js',
                'src/js/perfmatters.js',
                'views/src/js/main.js'
            ],
            options: {
                globals: {}
            }
        },
        jsbeautifier: {
            files: [
                'Gruntfile.js',
                'src/js/perfmatters.js',
                'views/src/js/main.js'
            ]
        },
        uncss: {
            dist: {
                files: {
                    'src/css/style-uncss.css': ['src/index.html'],
                    'views/css/style-uncss.css': ['views/pizza.html']
                }
            }
        },

        imageoptim: {
            myTask: {
                src: ['img', 'views/images']
            }
        },
        /*
                imagemin: {
                    static: {
                      options: {
                        optimizationLevel: 3,
                        svgoPlugins: [{ removeViewBox: false }],
                        use: [mozjpeg()]
                      },
                      files: {
                        'dist/img.png': 'src/img.png',
                        'dist/img.jpg': 'src/img.jpg',
                        'dist/img.gif': 'src/img.gif'
                      }
                    },
                    dynamic: {
                      files: [{
                        expand: true,
                        cwd: 'src/',
                        src: ['/*.{png,jpg,gif}'],
                        dest: 'dist/'
                      }]
                    }
                  },
        */

        uglify: {
            dist: {
                files: {
                    'src/js/perfmatters.min.js': ['src/js/perfmatters.js'],
                    'views/js/main.min.js': ['views/src/js/main.js']
                }
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },
        inline: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.html'],
                    dest: 'src/inlined/'
                }, {
                    expand: true,
                    cwd: 'views/src/',
                    src: ['pizza.html'],
                    dest: 'views/src/inlined/'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'src/inlined/index.html',
                    'project-2048.html': 'src/inlined/project-2048.html',
                    'project-mobile.html': 'src/inlined/project-mobile.html',
                    'project-webperf.html': 'src/inlined/project-webperf.html',
                    'views/pizza.html': 'views/src/inlined/pizza.html'
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        pagespeed: {
            options: {
                nokey: true,
                url: "https://developers.google.com"
            },
            prod: {
                options: {
                    url: "http://955de44.ngrok.com/",
                    locale: "en_US",
                    strategy: "mobile",
                    threshold: 90
                }
            },
            paths: {
                options: {
                    paths: ["/views/pizza.html"],
                    locale: "en_US",
                    strategy: "desktop",
                    threshold: 90
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-imageoptim');

    //grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-pagespeed');

    grunt.registerTask('default', ['jshint', 'jsbeautifier', 'imageoptim', 'uglify', 'cssmin', 'inline', 'htmlmin', 'pagespeed']);

};
