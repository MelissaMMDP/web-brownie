(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('appFooter', appFooter);

    /* @ngInject */
    function appFooter() {
        return {
            templateUrl: 'app/layout/footer.html',
            restrict: 'A'
        };
    }

}());
