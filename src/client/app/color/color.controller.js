(function () {
    'use strict';

    angular
        .module('app.color')
        .controller('Color', Color);

    /* @ngInject */
    function Color() {
        var vm = this;

        vm.headingOne = 'Color Scheme Framework';
    }

})();
