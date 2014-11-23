'use strict';
/* global Kinetic */

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

		$scope.kinetic = function() {

			var scene = new Kinetic.Stage({
				container: 'clock',
				width: 440,
				height: 456
			});
			

			$scope.currentClock = clockService.generatedTime();
			console.log($scope.currentClock);

			var imageClock = new Image();

			imageClock.onload = function() {
				var clock = new Kinetic.Image({
					x: 0,
					y: 0,
					image: imageClock,
					width: 440,
				});
				
				var clockImageLayer = new Kinetic.Layer();
				clockImageLayer.add(clock);
				scene.add(clockImageLayer);
			};
			imageClock.src=clockService.getClockSrc();

			var firstHandClockImage = new Image();

			firstHandClockImage.onload = function() {
				var firstHandClock = new Kinetic.Image({
					x: scene.getWidth()/2.01,
					y: scene.getHeight()/2.09,
					image: firstHandClockImage,
					width: 6,
					height: 120,
					rotation: $scope.currentClock.minutesTransf
				});
				var firstHandClockImageLayer = new Kinetic.Layer();

				firstHandClockImageLayer.add(firstHandClock);
				scene.add(firstHandClockImageLayer);

			}; 
			firstHandClockImage.src='/images/firstHand.png';


			var secondHandClockImage = new Image();
			secondHandClockImage.onload = function() {
				var secondHandClock = new Kinetic.Image({
					x: scene.getWidth()/2.01,
					y: scene.getHeight()/2.09,
					image: secondHandClockImage,
					width: 6,
					height: 80,
					rotation: $scope.currentClock.hoursTransf
				});
				var secondHandClockImageLayer = new Kinetic.Layer();

				secondHandClockImageLayer.add(secondHandClock);
				scene.add(secondHandClockImageLayer);
			}; 
			secondHandClockImage.src='/images/secondHand.png';
		};$scope.kinetic();

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
			var isGood = clockService.checkInputAndTime(input, $scope.currentClock);
			console.log(isGood);
			if (isGood) {
				ngDialog.open({ template: 'perfectChoice.html' });
			} else {
				ngDialog.open({ template: '/scripts/views/notgoodChoice.html', controller: 'GameCtrl'});
			}
		};
  });
