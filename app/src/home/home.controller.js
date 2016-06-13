/**
 * @ngdoc controller
 * @name app.home.controller:Home
 * @description < description placeholder >
 */

(function() {

    'use strict';

    angular
        .module('app.home')
        .controller('Home', Home);

    /* @ngInject */
    function Home() {
        var vm = this;
        init();

        function init() {
            vm.menus = [
                { state: "Fruit", title: "Fruit" },
                { state: "Weather", title: "Weather" }
            ];
        }
    }

}());
