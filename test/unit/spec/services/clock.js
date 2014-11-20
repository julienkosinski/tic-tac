'use strict';

describe('Service: clock', function () {

  // load the service's module
  beforeEach(module('ticTacApp'));

  // instantiate service
  var clock;
  beforeEach(inject(function (_clock_) {
    clock = _clock_;
  }));

  it('should do something', function () {
    expect(!!clock).toBe(true);
  });

});
