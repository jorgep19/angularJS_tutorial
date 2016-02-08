'use strict';

// append the phoneListCtrl to my tutorial app. We are using an annotation 
// for the injections so that angular's injector can pick up depencies even 
// when the code has been minified.
tutorialApp.controller('PhoneListCtrl', ['$scope', '$http', 
  function PhoneListCtrl($scope, $http) {
    // append phones attribute to the scope local to the phoneListCtrl
    // Note: this scope inherits prototypically the attributes of the 
    //       parent scope. 
    // Commentted out static hard-coded data
    // $scope.phones = [
    //   {'name': 'Nexus S',
    //    'snippet': 'Fast just got faster with Nexus S.',
    //    'age': 1},
    //   {'name': 'Motorola XOOM™ with Wi-Fi',
    //    'snippet': 'The Next, Next Generation tablet.',
    //    'age': 2},
    //   {'name': 'MOTOROLA XOOM™',
    //    'snippet': 'The Next, Next Generation tablet.',
    //    'age': 3 }
    // ];


    // Simple GET AJAX request to get phones data from the server
    // 
    $http.get('phones/phones.json')
        .success(function(data) { 
            $scope.phones = data; 
            // show just a segment of the data received
            // $scope.phones = data.splice(0, 5);
        });



    $scope.orderProp = 'age';
  }]);

// Other way of achieiving the injection beyond minification is:
// PhoneListCtrl.$inject = ['$scope', '$http']
// tutorialApp.controller('PhoneListCtrl', PhoneListCtrl);