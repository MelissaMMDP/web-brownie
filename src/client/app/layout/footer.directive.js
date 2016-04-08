(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('appFooter', appFooter);

    /* @ngInject */
    function appFooter() {
        return {
            restrict: 'E',
            templateUrl: 'app/layout/footer.html',
            replace: true
        };
    }

}());
