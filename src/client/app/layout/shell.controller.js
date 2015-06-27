(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    //Shell.$inject = [''];

    /* @ngInject */
    function Shell() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.mainHeading = 'Web Brownie';

        activate();

        ////////////////

        function activate() {
        }
    }

}());
