module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    less: {
      development: {
                     options: {
                         paths: ["css"]
                     },
                     files: {"css/custom.css": "css/custom.less"}
                 },
                 production: {
                     options: {
                         paths: ["css"],
                         cleancss: true
                     },
                     files: {"css/custom.css": "css/custom.less"}
                 }
    },
    watch: {
      styles:{
        files: "css/*.less",
        tasks: ["less"]
      }
    }
  });

  grunt.registerTask('default', ['less','watch']);

};
