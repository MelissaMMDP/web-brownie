(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    /* @ngInject */
    function Shell() {
        /* jshint validthis: true */
        var vm = this;

        vm.mainHeading = 'Web Brownie';
    }

}());
