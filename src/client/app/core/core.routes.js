(function () {
    'use strict';

    angular
        .module('app.core')
        .run(function($rootScope, $state) {
            return $rootScope.$on('$stateChangeStart', function() {
                return $rootScope.$state = $state;
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'Home',
                    controllerAs: 'home',
                    templateUrl: 'app/home/home.html',
                    data: {
                        title: 'Home'
                    }
                })
                .state('color', {
                    url: '/color',
                    controller: 'Color',
                    controllerAs: 'color',
                    templateUrl: 'app/color/color.html',
                    data: {
                        title: 'Color'
                    }
                })
                .state('404', {
                    url: '/404',
                    templateUrl: 'app/core/404.html',
                    data: {
                        title: '404'
                    }
                });

        });

}());
