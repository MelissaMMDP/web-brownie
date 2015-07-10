(function () {
    'use strict';

    angular
        .module('app')
        .controller('Color', Color);

    //Color.$inject = [''];

    /* @ngInject */
    function Color() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.mainHeading = 'Color Scheme Framework';

        activate();

        ////////////////

        function activate() {
        }
    }

}());


