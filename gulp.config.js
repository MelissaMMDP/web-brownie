module.exports = function () {
    var build = './build/',
        client = './src/client/',
        clientApp = client + 'app/',
        server = './src/server/',
        temp = './.tmp/',
        wiredep = require('wiredep'),

        bowerFiles = wiredep({devDependencies: true})['js'],

        config = {
            /* file paths */
            alljs: [
                './src/**/*.js',
                './*.js'
            ],
            build: build,
            buildHtml: build + '**/*.html',
            buildJs: build + 'js/**/*.js',
            client: client,
            css: temp + 'styles.css',
            html: clientApp + '**/*.html',
            htmlTemplates: clientApp + '**/*.html',
            index: client + 'index.html',
            js: [
                clientApp + '**/*.module.js',
                clientApp + '**/*.js',
                '!' + clientApp + '**/*.spec.js'
            ],
            less: client + 'styles/**/*.less',
            server: server,
            specs: clientApp + '**/*.spec.js',
            source: 'src/',
            temp: temp,
            tempCss: temp + '**/*.css',
            tempJs: temp + '**/*.js',

            /* optimized files */
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
