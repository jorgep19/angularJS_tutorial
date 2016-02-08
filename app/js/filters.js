'use strict';

var filtersMod = angular.module('tutFilters', []);

filtersMod.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

/* Filters */
