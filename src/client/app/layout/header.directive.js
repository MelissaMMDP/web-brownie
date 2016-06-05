(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('appHeader', appHeader);

    /* @ngInject */
    function appHeader() {
        return {
            restrict: 'A',
            templateUrl: 'app/layout/header.html'
        };
    }

}());
