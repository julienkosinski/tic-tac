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
  .controller('GameCtrl', function ($scope, clockService) {
		
		var scene = new Kinetic.Stage({
			container: 'clock',
			width: 440,
			height: 456
		});
		

		var currentClock = clockService.generatedTime();
		console.log(currentClock);

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
			
			////// Need to add offset to the hour hand according to the minute hand !!!
			
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

  });
