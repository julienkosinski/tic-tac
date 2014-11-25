'use strict';

/**
 * @ngdoc function
 * @name ticTacApp.controller:OptionsCtrl
 * @description
 * # OptionsCtrl
 * Controller of the ticTacApp
 */
angular.module('ticTacApp')
  .controller('OptionsCtrl', function ($scope, clockService) {

  		$scope.changeClockSrc = function(newClockSrcNb) {
  			clockService.setClockSrc('/images/clock'+newClockSrcNb+'.png');
  		};

  });
