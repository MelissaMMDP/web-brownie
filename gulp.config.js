module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var server = './src/server/';
    var temp = './.tmp/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];

    var config = {
        /* file paths */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        build: './build/',
        client: client,
        css: temp + 'styles.css',
        fonts: client + 'fonts/**/*.*',
        html: clientApp + '**/*.html',
        htmltemplates: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        less: client + 'styles/styles.less',
        server: server,
        specs: clientApp + '**/*.spec.js',
        source: 'src/',
        temp: temp,

        /* optimize files*/
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },

        /* template cache */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                root: 'app/',
                standAlone: false
            }
        },

        /* browser-sync */
        browserReloadDelay: 1000,

        /* Bower and NPM locations */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },

        /* node settings */
        defaultPort: 8001,
        nodeServer: './src/server/app.js'

    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    /* karma settings */
    config.karma = getKarmaOptions();

    return config;

    ////////////////

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                bowerFiles,
                config.specs,
                clientApp + '**/*.module.js',
                clientApp + '**/*.js',
                temp + config.templateCache.file
            ),
            exclude: [],
            preprocessors: {}
        };
        return options;
    }
};
