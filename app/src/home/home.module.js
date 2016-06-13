/**
 * @ngdoc overview
 * @name app.home
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.home', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){
    $stateProvider
     .state('Home', {
       url:'/home',
       templateUrl:'src/home/home.html',
       controller: 'Home as vm'
     }
    );
  }

}());
