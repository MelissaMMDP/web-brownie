module.exports = function () {
    var build = './build/',
        client = './src/client/',
        clientApp = client + 'app/',
        nodeModules = './node_modules/',
        server = './src/server/',
        temp = './.tmp/',

        config = {
            /* file paths */
            alljs: [
                './src/**/*.js',
                './*.js'
            ],
            angular: [
                nodeModules + 'angular/angular.js',
                nodeModules + 'angular-sanitize/angular-sanitize.js',
                nodeModules + 'angular-ui-router/release/angular-ui-router.js'
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
            less: client + 'styles/styles.less',
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

            /* node settings */
            defaultPort: 8001,
            nodeServer: './src/server/app.js'

        };

    /* karma settings */
    config.karma = getKarmaOptions();

    return config;

    ////////// Functions

    function getKarmaOptions() {
        return {
            files: [].concat(
                nodeModules + 'angular/angular.js',
                nodeModules + 'angular-mocks/angular-mocks.js',
                config.angular,
                config.specs,
                clientApp + '**/*.module.js',
                clientApp + '**/*.js',
                temp + config.templateCache.file
            ),
            exclude: [],
            preprocessors: {}
        };
    }
};
