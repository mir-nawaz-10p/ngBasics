(function() {

    /* global module, inject */

    'use strict';

    describe('Filter: centigrade', function() {

        beforeEach(module('app.core'));
        beforeEach(module('app.common'));

        var centigrade;

        beforeEach(inject(function(centigradeFilter) {

            centigrade = centigradeFilter;

        }));

        it('should not do anything for now', function() {
            expect(true).toBe(false);
        });

    });
}());
