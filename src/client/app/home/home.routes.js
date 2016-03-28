(function () {
    'use strict';

    angular
        .module('app.home')
        .config(function ($stateProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'Home',
                    controllerAs: 'home',
                    templateUrl: 'app/home/home.html',
                    data: {
                        title: 'Home'
                    }
                });

        });

}());
