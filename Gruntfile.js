module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-react");

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
    },

  });

  grunt.registerTask("default", ["watch"]);

}
