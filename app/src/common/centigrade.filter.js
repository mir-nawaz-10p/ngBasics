/**
 * @ngdoc filter
 * @name app.common.filer:centigrade
 * @description < description placeholder >
 * @param {object} input object to be filtered
 * @returns {object} < returns placeholder >
 */

(function() {

    'use strict';

    angular
        .module('app.common')
        .filter('centigrade', centigrade);

    /* @ngInject */
    function centigrade() {
        return function(input) {
            return input + ' C';
        };
    }

}());
