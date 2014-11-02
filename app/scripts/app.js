'use strict';

/**
 * @ngdoc overview
 * @name koobApp
 * @description
 * # koobApp
 *
 * Main module of the application.
 */
angular
  .module('koobApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'infinite-scroll',
    'mm.foundation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })