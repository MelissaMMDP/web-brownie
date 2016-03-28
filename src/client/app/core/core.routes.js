(function () {
    'use strict';

    angular
        .module('app.core')
        .run(function($rootScope, $state) {
            return $rootScope.$on('$stateChangeStart', function() {
                $rootScope.$state = $state;
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.when('', '/home');
            $urlRouterProvider.otherwise('/404');

            $stateProvider
                .state('404', {
                    url: '/404',
                    templateUrl: 'app/core/404.html',
                    data: {
                        title: '404'
                    }
                });

        });

}());
