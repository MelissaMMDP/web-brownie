(function () {
    'use strict';

    angular
        .module('app.color')
        .config(function ($stateProvider) {

            $stateProvider
                .state('color', {
                    url: '/color',
                    controller: 'Color',
                    controllerAs: 'color',
                    templateUrl: 'app/color/color.html',
                    data: {
                        title: 'Color'
                    }
                });

        });

}());
