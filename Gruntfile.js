module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-bower");
  grunt.loadNpmTasks("grunt-browserify");

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

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

    browserify: {
      options: {
        transform: [ require("grunt-react").browserify ],
        alias: {
          "react": "./src/js/react.js",
          "react-dom": "./src/js/react-dom.js"
        }
      },
      app: {
        src: "./src/js/main.jsx",
        dest: "./public/js/main.js"
      }

    },

    bower: {
      dev: {
        dest: "src/",
        js_dest: "src/js",
        css_dest: "src/css",
        fonts_dest: "src/fonts/",
        images_dest: "src/images/"
      }
    },

    watch: {
      css: {
        files: [
          "./src/**/*.sass",
          "./src/**/*.scss"
        ],
        tasks: ["sass"],
        options: {
          livereload: true
        },
      },
      js: {
        files: [
          "./src/**/*.js",
          "./src/**/*.jsx"
        ],
        tasks: ["browserify"],
        options: {
          livereload: true
        }
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
