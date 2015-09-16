(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('appHeader', appHeader);

    /* @ngInject */
    function appHeader() {
        return {
            templateUrl: 'app/layout/header.html',
            restrict: 'A'
        }
    }
})();
