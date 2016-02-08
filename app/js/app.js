'use strict';

// Create the app object with no depencies (dependencies = [])
var tutorialApp = angular.module('AngularTutorialApp', [
  'ngRoute',
  'tutControllers',
  'tutFilters',
  'tutServices'
]);

tutorialApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      })
      .when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })
      .otherwise({ redirectTo: '/' });
  }
])