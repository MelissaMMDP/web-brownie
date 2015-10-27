describe('app.layout module', function () {
    var elm,
        scope;

    beforeEach(module('app.layout'));

    beforeEach(inject(function ($compile, $rootScope) {
        elm = angular.element(
            '<nav class="global-nav">' +
            '<ul>' +
            '<li><a data-ui-sref="home">Home</a></li>' +
            '<li><a data-ui-sref="color">Color</a></li>' +
            '</ul>' +
            '</nav>');
        scope = $rootScope;
        $compile(elm)(scope);
        scope.$digest();
    }));

    describe('appHeader directive', function () {

        it('should be created successfully', function () {
            expect(elm).toBeDefined();
        });

    });
});
