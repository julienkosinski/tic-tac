'use strict';

describe('Directive: kinetic', function () {

  // load the directive's module
  beforeEach(module('ticTacApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<kinetic></kinetic>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the kinetic directive');
  }));
});
