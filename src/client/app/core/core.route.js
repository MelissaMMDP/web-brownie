(function () {
    'use strict';

    angular
        .module('app.core')
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'Home',
                    controllerAs: 'home',
                    templateUrl: 'app/home/home.html'
                })
                .state('color', {
                    url: '/color',
                    controller: 'Color',
                    controllerAs: 'color',
                    templateUrl: 'app/color/color.html'
                })
                .state('404', {
                    url: '/404',
                    templateUrl: 'app/core/404.html'
                });

        });

}());
