/**
 * @ngdoc directive
 * @name app.common.directive:centiGrade
 * @scope true
 * @param {object} test test object
 * @restrict E
 *
 * @description < description placeholder >
 *
 */

(function() {

    'use strict';

    angular
        .module('app.common')
        .directive('centiGrade', centiGrade);

    /* @ngInject */
    function centiGrade() {

        return {
            restrict: 'E',
            template: '<div style="display: inherit;"> &#8451;</div>'
        };

    }

}());
