describe('app.layout module', function () {
    var elm,
        scope;

    beforeEach(module('app.layout'));

    beforeEach(inject(function ($compile, $rootScope) {
        elm = angular.element(
            '<p>' +
            '<small>&copy; Melissa Austin 2015</small>' +
            '</p>');
        scope = $rootScope;
        $compile(elm)(scope);
        scope.$digest();
    }));

    describe('appFooter directive', function () {

        it('should be created successfully', function () {
            expect(elm).toBeDefined();
        });

    });
});
