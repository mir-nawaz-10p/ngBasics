/**
 * @ngdoc overview
 * @name app.weather
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.weather', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){
    $stateProvider
     .state('Weather', {
       url:'/weather',
       templateUrl:'src/weather/weather.html',
       controller: 'Weather as vm'
     }
    );
  }

}());
