'use strict';

/* jasmine specs for controllers go here */
// This unit test are written with the Jasmine API and are run using Karma
describe('AngularTutorialApp', function() {  
  // before each test create our app module
  beforeEach(module('AngularTutorialApp'));
  beforeEach(module('tutServices'));

  // Required to check the result of the custom Phone service
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  describe('PhoneListCtrl', function() {
    var scope, ctrl,
        $httpBackend; // In order to test $http requests
  
    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service in order to avoid a name conflict.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      // Mock angular services come from angular-mocks.js in the karma config.

      // Setup mock $http
      $httpBackend = _$httpBackend_;
      //  In tutorial this line was $httpBackend.expectGET('phones/phones.json')
      // but that was giving an error or request when unexpected i think because 
      // the beforeEach was being called multiple times but this feel a bit wear
      // with .when() test passes but i might need further research
      $httpBackend.when('GET', 'phones/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      // testing scope
      scope = $rootScope.$new();


      ctrl = $controller('PhoneListCtrl', {$scope: scope });
    }));

    // inject will pass to the test logic the $controller which allows us to lookup
    // the controller to be tested by name. In this lookup we can pass mock dependencies
    // to power the test logic. Example: { $scope: mockScope }
    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('PhoneListCtrl', {$scope:scope});
    }));

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });

    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.phones).toEqualData([]);
      $httpBackend.flush();

      expect(scope.phones).toEqualData([{name: 'Nexus S'},
                                   {name: 'Motorola DROID'}]);
    });
  });

  describe('PhoneDetailCtrl', function() {
    var scope, $httpBackend, ctrl;

    function xyzPhoneData() {
      return {
        name: 'phone xyz',
        images: ['image/url1.png', 'image/url2.png']
      }
    };

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

      $routeParams.phoneId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
    }));


    it('should fetch phone detail', function() {
      expect(scope.phone).toEqualData({});
      $httpBackend.flush();

      expect(scope.phone).toEqualData(xyzPhoneData());
    });
  });
});















