'use strict';

/**
 * @ngdoc service
 * @name ticTacApp.clock
 * @description
 * # clock
 * Service in the ticTacApp.
 */
angular.module('ticTacApp')
  .service('clockService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var clockSrc = '/images/clock1.png';
    var clockTime = {};
    clockTime.dayState = 'Matin';
    function generateTime(hours, minutes){
    	if (minutes === 60) {
    		clockTime.minutes = 0;
    	}
    	else {
    		clockTime.minutes = minutes;
    	}
    	clockTime.hours = hours;


    	clockTime.minutesTransf = (minutes/(60/360))+180;
    	if (hours > 12) { // Because it is in french hour format
    		clockTime.dayState = 'Après-midi';
    		if(minutes === 60) {
    			minutes = 2;
    		}
			clockTime.hoursTransf = ((hours-12)/(12/360))+(30/(60/minutes))+180; // Just remove for calculation the notion of pm french hour :-).
    	} else {
    		if(minutes === 60) { // Avoid a bug when o'clock
    			minutes = 2;
    		}
    		clockTime.hoursTransf = (hours/(12/360))+(30/(60/minutes))+180; // (30/(60/minutes)) is about adding rotation according to the state of the minutes. (hours/(12/360)) convert hour in degree. +180 is because at degree 0 it needs an offset of 180.
    	} 
    	return clockTime;
    	// Return an object containing transformed hours, minutes and return a passed in parameter timeState.
    }
    return {
        getClockSrc: function () {
            return clockSrc;
        },
        setClockSrc: function (newClockSrc) {
            clockSrc = newClockSrc;
        },
        getClockTime: function () {
            return clockTime;
        },
        generatedTime: function() {
        	// Return a random Hour and minute and timeState
        	var minutes = _.sample([5,10,15,20,25,30,35,40,45,50,55,60]); // Here, 60 minutes == 0 minutes to have good calculation :-).
        	var hours = _.random(23);
        	clockTime = generateTime(hours, minutes);
        	
        	return clockTime;
        },
        checkInputAndTime: function(input) {
        	if (input.hours === clockTime.hours && input.minutes === clockTime.minutes){
        		return true;
        	} else {
        		return false;
        	}
        }
    };
  });
