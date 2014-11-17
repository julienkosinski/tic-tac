'use strict';

/**
 * @ngdoc overview
 * @name ticTacApp
 * @description
 * # ticTacApp
 *
 * Main module of the application.
 */
angular
  .module('ticTacApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .when('/options', {
        templateUrl: 'views/options.html',
        controller: 'GameCtrl'
      })
      .when('/credits', {
        templateUrl: 'views/credits.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
