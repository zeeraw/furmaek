module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-react");
  grunt.loadNpmTasks('grunt-bower');

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    react: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: "./src/templates",
            src: ["**/*.jsx"],
            dest: "./public/js",
            ext: ".js"
          }
        ]
      }
    },

    sass: {
      dist: {
        options: {
          style: "expanded"
        },
        files: {
          "./public/css/main.css": "./src/css/main.scss"
        }
      }
    },

    uglify: {
      build: {
        src: "src/js/main.js",
        dest: "public/js/main.min.js"
      }
    },

    bower: {
      dev: {
        dest: "public/",
        js_dest: "public/js",
        css_dest: "public/css",
        fonts_dest: 'public/fonts/',
        images_dest: 'public/images/'
      }
    },

    watch: {
      css: {
        files: [
          "**/*.sass",
          "**/*.scss"
        ],
        tasks: ["sass"],
        options: {
          livereload: true
        },
      },
      bower: {
        files: [
          "./bower_components/**/*",
        ],
        tasks: ["bower"]
      }
    },

  });

  grunt.registerTask("default", ["watch"]);

}
