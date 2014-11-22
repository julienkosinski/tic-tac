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
    function generateTime(hours, minutes){
    	var clockTime = {};
    	
    	if (minutes === 60) {
    		clockTime.minutes = 0;
    	}
    	else {
    		clockTime.minutes = minutes;
    	}
    	clockTime.hours = hours;


    	clockTime.minutesTransf = (minutes/(60/360))+180;
    	if (hours > 12) { // Because it is in french hour format
    		clockTime.hoursTransf = ((hours-12)/(12/360))+(30/(60/minutes))+180; // Just remove for calculation the notion of pm french hour :-).
    	} else {
    		clockTime.hoursTransf = (hours/(12/360))+(30/(60/minutes))+180; // (30/(60/minutes)) is about adding rotation according to the state of the minutes. (hours/(12/360)) convert hour in degree. +180 is because at degree 0 it needs an offset of 180. 
    	}
    	return clockTime;
    	// Return an object containing transformed hours, minutes and return a passed in parameter timeState.
    }
    return {
        getClockSrc: function () {
            //You could also return specific attribute of the form data instead
            //of the entire data
            return clockSrc;
        },
        setClockSrc: function (newClockSrc) {
            //You could also set specific attribute of the form data instead
            clockSrc = newClockSrc;
        },
        generatedTime: function() {
        	// Return a random Hour and minute and timeState
        	var minutes = _.sample([5,10,15,20,25,30,35,40,45,50,55,60]); // Here, 60 minutes == 0 minutes to have good calculation :-).
        	var hours = _.random(24);
        	var clockTime = generateTime(hours, minutes);
        	return clockTime;
        },
        checkInputAndTime: function(input, time) {
        	//Verify that the two objects countain the same value, use underscore for that :-)
        }
    };
  });
