(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('appHeader', appHeader);

    /* @ngInject */
    function appHeader() {
        return {
            restrict: 'E',
            templateUrl: 'app/layout/header.html',
            replace: true
        };
    }

}());
