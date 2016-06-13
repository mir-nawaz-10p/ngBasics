/**
 * @ngdoc overview
 * @name app.fruit
 * @description < description placeholder >
 */

(function() {

    'use strict';

    angular
        .module('app.fruit', [])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider) {
        $stateProvider
            .state('Fruit', {
                url: '/fruit',
                templateUrl: 'src/fruit/fruit.html',
                controller: 'Fruit as vm'
            });
    }

}());
