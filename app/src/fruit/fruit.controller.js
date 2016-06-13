/**
 * @ngdoc controller
 * @name app.fruit.controller:Fruit
 * @description < description placeholder >
 */

(function() {

    'use strict';

    angular
        .module('app.fruit')
        .controller('Fruit', Fruit);

    /* @ngInject */
    function Fruit() {
        var vm = this;
        vm.title = "Fruit";
        vm.fruits = ["Apple", "Banana"];
        vm.addFruits = addFruits;
        vm.removeFruit = removeFruit;

        function addFruits(fruit) {
            if (vm.fruits.indexOf(fruit) <= 0) {
                vm.fruits.push(fruit);
            }
        }
        function removeFruit(fruit) {
          var index = vm.fruits.indexOf(fruit);
            if (index >= 0) {
                vm.fruits.splice(index, 1);
            }
        }
    }

}());
