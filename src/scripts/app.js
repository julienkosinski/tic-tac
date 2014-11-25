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
    'ngTouch',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .when('/options', {
        templateUrl: 'views/options.html',
        controller: 'OptionsCtrl'
      })
      .when('/credits', {
        templateUrl: 'views/credits.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
