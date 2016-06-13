/**
 * @ngdoc service
 * @name app.weather.weatherFact
 * @description < description placeholder >
 */

(function() {

    'use strict';

    angular
        .module('app.weather')
        .factory('weatherFact', weatherFact);

    /* @ngInject */
    function weatherFact(weatherConst, $http, $q) {
        return {
            forecastWeatherWithLatLon: forecastWeatherWithLatLon,
            forecastWeatherWithCity: forecastWeatherWithCity
        };

        /**
         * [forecastWeatherWithLatLon description]
         * @param  {[type]} loc [description]
         * @return {[type]}     [description]
         */
        function forecastWeatherWithLatLon(loc) {
            var route = weatherConst.baseUrl.concat('forecast').concat('/daily')
                .concat('?appid=').concat(weatherConst.appid).concat('&units=metric')
                .concat('&lat=').concat(loc.lat).concat('&lon=').concat(loc.lon);
            return __mapResponse(route);
        }
        /**
         * [forecastWeatherWithCity description]
         * @param  {[type]} loc [description]
         * @return {[type]}     [description]
         */
        function forecastWeatherWithCity(loc) {
            var route = weatherConst.baseUrl.concat('forecast').concat('/daily')
                .concat('?appid=').concat(weatherConst.appid).concat('&units=metric')
                .concat('&q=').concat(loc.city);
            return __mapResponse(route);
        }
        /**
         * [__mapResponse description]
         * @param  {[type]} res [description]
         * @return {[type]}     [description]
         */
        function __mapResponse(route) {
            return $http.get(route)
                .then(function(res) {
                    if (res.data.cod !== '200') {
                        throw {error: 'Ooops something went wrong. try again'};
                    }
                    var response = res.data;
                    var forecast = [];
                    response.list.forEach(function(item) {
                        forecast.push({
                            date: item.dt,
                            clouds: item.clouds,
                            humidity: item.humidity,
                            pressure: item.pressure,
                            min: item.temp.min,
                            max: item.temp.max,
                            description: item.weather[0].description
                        });
                    });
                    return $q.when({
                        location: response.city.name + ', ' + response.city.country,
                        forecast: forecast
                    });
                });
        }

    }

}());
