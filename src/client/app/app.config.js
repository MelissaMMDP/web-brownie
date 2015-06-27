(function () {
    'use strict';

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('shell', {
                    url: '/home',
                    controller: 'Shell',
                    controllerAs: 'shell',
                    templateUrl: 'app/layout/shell.html'
                })
                .state('color', {
                    url: '/color',
                    templateUrl: 'app/color/color.html',
                    controller: 'Color',
                    controllerAs: 'color'
                })
                .state('404', {
                    url: '/404',
                    templateUrl: 'app/core/404.html'
                });

        });
}());
