describe('app.home module', function () {
    var controller;

    beforeEach(module('app.home'));

    beforeEach(inject(function ($controller) {
        controller = $controller('Home');
    }));

    describe('Home controller', function () {

        it('should be created successfully', function () {
            expect(controller).toBeDefined();
        });

        it('headingOne should equal Web Brownie', function() {
            expect(controller.headingOne).toBe('Web Brownie');
        });

    });
});
