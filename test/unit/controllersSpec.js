'use strict';

/* jasmine specs for controllers go here */
// This unit test are written with the Jasmine API and are run using Karma
describe('AngularTutorialApp', function() {

  // before each test create our app module
  beforeEach(module('AngularTutorialApp'));


  // inject will pass to the test logic the $controller which allows us to lookup
  // the controller to be tested by name. In this lookup we can pass mock dependencies
  // to power the test logic. Example: { $scope: mockScope }
  it('should create "phones" model with 3 phones', inject(function($controller) {
    var mockScope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:mockScope});

    expect(mockScope.phones.length).toBe(3);
  }));

});
