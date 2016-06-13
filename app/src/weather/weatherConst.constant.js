/**
 * @ngdoc object
 * @name app.weather.constant:weatherConst
 * @description < description placeholder >
 * @example
   <pre>
   angular.module("someModule", [])
   .config(configuration);

   function configuration(weatherConst, someProvider){
    //use the injected constant
    };
   </pre>
 */

(function(){

  'use strict';

  var weatherConst = {
    appid: '3a1cce9ecd6dfd828222d656276f9344',
    baseUrl: 'http://api.openweathermap.org/data/2.5/'
  };

	angular
		.module('app.weather')
		.constant('weatherConst', weatherConst);

}());
