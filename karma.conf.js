module.exports = function (config) {
    var gulpConfig = require('./gulp.config')();

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: './',


        // list of files / patterns to load in the browser
        files: gulpConfig.karma.files,


        // frameworks to use
        frameworks: ['jasmine'],


        // Start these browsers
        browsers: ['Chrome']

    });
};
