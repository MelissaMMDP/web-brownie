describe('app.color module', function () {
    var controller;

    beforeEach(module('app.color'));

    beforeEach(inject(function ($controller) {
        controller = $controller('Color');
    }));

    describe('Color controller', function () {

        it('should be created successfully', function () {
            expect(controller).toBeDefined();
        });

        it('headingOne should equal Color Scheme Framework', function() {
            expect(controller.headingOne).toBe('Color Scheme Framework');
        });

    });
});
