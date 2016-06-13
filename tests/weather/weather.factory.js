(function() {

    /* global module, inject */

    'use strict';

    describe('Factory: weather', function() {

        beforeEach(module('app.core'));
        beforeEach(module('app.weather'));

        var weather;

        beforeEach(inject(function($injector) {

            weather = $injector.get('weather');

        }));

        it('should do nothing', function() {
            expect(true).toBe(false);
        });

    });
}());
