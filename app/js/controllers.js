'use strict';

// append the phoneListCtrl to my tutorial app to the
tutorialApp.controller('PhoneListCtrl', function($scope) {
  // append phones attribute to the scope local to the phoneListCtrl
  // Note: this scope inherits prototypically the attributes of the 
  //       parent scope. 
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
     'age': 1},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 2},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 3 }
  ];

  $scope.orderProp = 'age';
});