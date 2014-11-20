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

    return {
        getClockSrc: function () {
            //You could also return specific attribute of the form data instead
            //of the entire data
            return clockSrc;
        },
        setClockSrc: function (newClockSrc) {
            //You could also set specific attribute of the form data instead
            clockSrc = newClockSrc;
        }
    };
  });
