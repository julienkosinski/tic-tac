'use strict';

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


			var tempSetMinute = 0;
			var choisenDegree1 = (tempSetMinute/(60/360))+180;

			var firstHandClock = new Kinetic.Image({
				x: scene.getWidth()/2.04,
				y: scene.getHeight()/2.04,
				image: firstHandClockImage,
				width: 6,
				height: 120,
				rotation: choisenDegree1
			});
			var firstHandClockImageLayer = new Kinetic.Layer();

			firstHandClockImageLayer.add(firstHandClock);
			scene.add(firstHandClockImageLayer);

		}; 
		firstHandClockImage.src='/images/firstHand.png'


		var secondHandClockImage = new Image();
		secondHandClockImage.onload = function() {
			
			////// Need to add offset to the hour hand according to the minute hand !!!

			var tempSetHour = 3;
			var choisenDegree2 = (tempSetHour/(12/360))+180;
			
			var secondHandClock = new Kinetic.Image({
				x: scene.getWidth()/2.04,
				y: scene.getHeight()/2.04,
				image: secondHandClockImage,
				width: 6,
				height: 80,
				rotation: choisenDegree2
			});
			var secondHandClockImageLayer = new Kinetic.Layer();

			secondHandClockImageLayer.add(secondHandClock);
			scene.add(secondHandClockImageLayer);

		}; 
		secondHandClockImage.src='/images/secondHand.png'

  });
