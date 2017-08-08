module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-postcss');
    grunt.initConfig({
        postcss: {
            options: {
                processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer')({
                        browsers: 'last 2 versions'
                    }), // add vendor prefixes
        require('cssnano')() // minify the result
      ]
            },
            dist: {
                src: 'css/*.css'
            }
        }
    });

    grunt.registerTask('default', [
        'postcss'
    ]);
}
