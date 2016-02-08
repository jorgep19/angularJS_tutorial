'use strict';

/* jasmine specs for controllers go here */
// This unit test are written with the Jasmine API and are run using Karma
describe('AngularTutorialApp', function() {
  var scope, ctrl;
  
  // before each test create our app module
  beforeEach(module('AngularTutorialApp'));

  // inject will pass to the test logic the $controller which allows us to lookup
  // the controller to be tested by name. In this lookup we can pass mock dependencies
  // to power the test logic. Example: { $scope: mockScope }
  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('PhoneListCtrl', {$scope:scope});
  }));

  it('should create "phones" model with 3 phones', function() {
      expect(scope.phones.length).toBe(3);
    });

  it('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('age');
  });
});
