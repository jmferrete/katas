'use strict';

/**
 * @ngdoc function
 * @name katasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the katasApp
 */
angular.module('katasApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

  	$scope.highlightHomeLink = true; //($location.path() === '#/');
  	$scope.highlightAboutLink = ($location.path() === '#/about');
  	$scope.highlightContactLink = ($location.path() === '#/contact');

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]
);
