'use strict';

/**
 * @ngdoc function
 * @name ticTacApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the ticTacApp
 */
angular.module('ticTacApp')
  .controller('GameCtrl', function ($scope, clockService, ngDialog) {
		
		$scope.numberMinutes = 0;
		$scope.numberHours = 0;
		$scope.generatedHours = clockService.getClockTime().hours;
		$scope.generatedMinutes = clockService.getClockTime().minutes;
		
		//console.log(clockService.getClockTime());

		$scope.addNumberMinutes = function() {
			if($scope.numberMinutes<55){
				$scope.numberMinutes+=5;
			}
		};

		$scope.removeNumberMinutes = function() {
			if($scope.numberMinutes>0){
				$scope.numberMinutes-=5;
			}
		};

		$scope.addNumberHours = function() {
			if($scope.numberHours<23){
				$scope.numberHours+=1;
			}
		};

		$scope.removeNumberHours = function() {
			if($scope.numberHours>0){
				$scope.numberHours-=1;
			}
		};

		$scope.displayNgDialog = function(){
			var input = {};
			input.hours = $scope.numberHours;
			input.minutes = $scope.numberMinutes;
			var isGood = clockService.checkInputAndTime(input);
			if (isGood) {
				ngDialog.open({ template: 'views/perfectChoice.html' });
			} else {
				ngDialog.open({ template: 'views/notgoodChoice.html', controller:'GameCtrl'});
			}
		};
  });
