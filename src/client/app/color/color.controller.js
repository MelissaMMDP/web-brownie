(function () {
    'use strict';

    angular
        .module('app')
        .controller('Color', Color);

    /* @ngInject */
    function Color() {
        /* jshint validthis: true */
        var vm = this;

        vm.mainHeading = 'Color Scheme Framework';
    }

}());


