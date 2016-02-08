'use strict';

// Create the app object with no depencies (dependencies = [])
var tutorialApp = angular.module('AngularTutorialApp', []);

// append the phoneListCtrl to my tutorial app to the
tutorialApp.controller('PhoneListCtrl', function($scope) {
  // append phones attribute to the scope local to the phoneListCtrl
  // Note: this scope inherits prototypically the attributes of the 
  //       parent scope. 
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});