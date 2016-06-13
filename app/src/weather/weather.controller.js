/**
 * @ngdoc controller
 * @name app.weather.controller:Weather
 * @description < description placeholder >
 */

(function() {

    'use strict';

    angular
        .module('app.weather')
        .controller('Weather', Weather);

    /* @ngInject */
    function Weather(weatherFact) {
        var vm = this;
        vm.title = 'Weather';
        vm.location = {
            lat: 24.8,
            lon: 67.0,
            city: 'karachi'
        };
        vm.forecast = {
            temperatur: 0,
            location: ''
        };
        vm.forecastWet = forecastWet;

        /////////////////////

        /**
         * @ngdoc method
         * @name testFunction
         * @param {number} num number is the number of the number
         * @methodOf app.weather.controller:Weather
         * @description
         * My Description rules
         */
        function forecastWet(loc, type) {
            weatherFact['forecastWeatherWith'.concat(type)](loc)
                .then(function(res) {
                    vm.forecast = {
                        temperatures: res.forecast,
                        location: res.location
                    };
                }).catch(function(res) {
                    alert(res.error);
                });
        }
    }

}());
