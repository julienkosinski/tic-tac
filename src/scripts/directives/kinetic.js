'use strict';

/* global Kinetic */

/**
 * @ngdoc directive
 * @name ticTacApp.directive:kinetic
 * @description
 * # kinetic
 */
angular.module('ticTacApp').directive('kinetic', function (clockService) {
	return {
		restrict: 'A',
		controller: 'GameCtrl',

		link: function(scope) {
			scope.$watch('reinit', function() {
				var scene = new Kinetic.Stage({
					container: 'clock',
					width: 440,
					height: 456
				});
				
				var currentClock = clockService.generatedTime();

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
						rotation: currentClock.minutesTransf
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
						rotation: currentClock.hoursTransf
					});
					var secondHandClockImageLayer = new Kinetic.Layer();

					secondHandClockImageLayer.add(secondHandClock);
					scene.add(secondHandClockImageLayer);
				}; 
				secondHandClockImage.src='/images/secondHand.png';

				scope.generatedHours = clockService.getClockTime().hours;
				scope.generatedMinutes = clockService.getClockTime().minutes;
				scope.dayState = clockService.getClockTime().dayState;
				//console.log(clockService.getClockTime());
			});
		}
	};
});
