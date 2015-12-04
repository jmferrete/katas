'use strict';

/**
 * @ngdoc function
 * @name katasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the katasApp
 */
angular.module('katasApp')
  .controller('TitleBarController', ['$scope', '$location', function ($scope, $location) {

  	$scope.highlightHomeLink = function() {
      return ($location.path() === '/');
    };

  	$scope.highlightAboutLink = function() {
      return ($location.path() === '/about');
    };

  	$scope.highlightContactLink = function() {
      return ($location.path() === '/contact');
    };

  }]
);
