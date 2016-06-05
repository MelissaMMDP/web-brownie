(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('appFooter', appFooter);

    /* @ngInject */
    function appFooter() {
        return {
            restrict: 'A',
            templateUrl: 'app/layout/footer.html'
        };
    }

}());
